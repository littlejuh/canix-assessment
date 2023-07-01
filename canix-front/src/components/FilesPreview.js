import React from 'react';
import { Typography } from '@mui/material';

const FilesPreview = ({ files }) => {
  const fileNames = files.map((file) => file.name).join(', ');
  return (
    <div style={{ margin: '1rem' }}>
      {fileNames && (
        <>
          <Typography variant="subtitle2">Preview</Typography>
          <Typography variant="body1">{fileNames}</Typography>
        </>
      )}
    </div>
  );
};

export default FilesPreview;
