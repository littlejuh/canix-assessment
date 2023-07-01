import React, { useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';

const FilesInput = ({ onDrop, files }) => {
  const accept = { 'text/csv': ['.csv'] };
  const validator = useCallback(
    (meta) => {
      return files.find((e) => e.name === meta.name && e.size === meta.size && e.type === meta.type);
    },
    [files],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept, validator, onDrop });

  return (
    <Box
      {...getRootProps()}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        mt: 2,
        border: '2px dashed #aaa',
        backgroundColor: '#f5f5f5',
        cursor: 'pointer',
        ...(isDragActive && { backgroundColor: '#e0e0e0' }),
      }}
    >
      <input {...getInputProps()} />
      <Typography variant="body1" color="textSecondary" align="center">
        {isDragActive ? 'Drop the csv files here' : 'Drop the csv files, or click to multiple select'}
      </Typography>
    </Box>
  );
};

export default FilesInput;
