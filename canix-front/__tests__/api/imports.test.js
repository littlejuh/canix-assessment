import { getWeighIn } from 'api/imports';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('getWeighIn', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch weighIns successfully', async () => {
    const mockData = {
      weigh_in_started_at: '2023-06-27T10:00:00.000Z',
      weights: [
        { category: 'DAY', product_name: '1B406020000607D000003422', weight: '10.5' },
        { category: 'ONE', product_name: '18C406020000608E000003339', weight: '7.2' },
      ],
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const importId = 'id-123';

    await expect(getWeighIn(importId)).resolves.toEqual({
      started_at: '2023-06-27T10:00:00.000Z',
      weights: [
        { category: 'DAY', product_name: '1B406020000607D000003422', weight: 10.5 },
        { category: 'ONE', product_name: '18C406020000608E000003339', weight: 7.2 },
      ],
    });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(`${process.env.REACT_APP_CANIX_API_HOST}/api/imports/${importId}/weighins`);
  });

  it('should throw an error when fetching weighIns fails', async () => {
    fetchMock.mockRejectOnce(new Error('Failed to fetch weighIn.'));

    const importId = 'id-123';

    await expect(getWeighIn(importId)).rejects.toThrow('Failed to fetch weighIn.');
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(`${process.env.REACT_APP_CANIX_API_HOST}/api/imports/${importId}/weighins`);
  });
});
