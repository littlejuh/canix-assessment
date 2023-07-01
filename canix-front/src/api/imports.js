const BASE_URL = process.env.REACT_APP_CANIX_API_HOST;

export const save = async (importId, files) => {
  const uploadPromises = files.map(async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${BASE_URL}/api/imports/${importId}/weighins`, {
      method: 'POST',
      body: formData,
    });

    console.log(response)
    if (!response.ok) {
      throw new Error(`Failed to save weighIn - ${file.name}`);
    }
  });

  return Promise.all(uploadPromises);
};

export const getWeighIn = async (importId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/imports/${importId}/weighins`);
    if (!response.ok) {
      throw new Error('Failed to fetch weighIn.');
    }
    const data = await response.json();
    const weights = data.weights.map((entry) => ({
      ...entry,
      weight: parseFloat(entry.weight),
    }));

    return { started_at: data.weigh_in_started_at, weights: weights  };
  } catch (error) {
    console.error('Error fetching weighIn:', error);
    throw error;
  }
};
