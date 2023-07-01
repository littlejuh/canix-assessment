import { v4 as uuid } from 'uuid';
import React, { useState, useCallback } from 'react';
import { Container, Box } from '@mui/material';

import Header from './components/Header';
import FilesInput from './components/FilesInput';
import FilesPreview from './components/FilesPreview';
import CustomButton from './components/CustomButton';
import ImportReport from './components/ImportReport';
import Footer from './components/Footer';

import { save } from './api/imports';

const App = () => {
  const [importId, setImportId] = useState('');
  const [files, setFiles] = useState([]);
  const [showReport, setShowReport] = useState(false);

  const cleanFiles = () => {
    setFiles([]);
  };

  const handleFileDrop = useCallback((uploadedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    setShowReport(false);
  }, []);

  const submitImport = async () => {
    const id = uuid();

    try {
      await save(id, files);
      cleanFiles()
      setImportId(id);
      setShowReport(true);
    } catch (error) {
      console.error(error);
    }
  };

  const cantSubmit = files.length === 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ flex: 1 }}>
        <Container maxWidth="xl">
          <FilesInput onDrop={handleFileDrop} files={files} />
          {files.length > 0 && <FilesPreview files={files} />}
          <CustomButton
            label="Clean"
            color="grey"
            disabled={cantSubmit}
            onClick={cleanFiles}
          />
          <CustomButton
            label="Import"
            color="primary"
            disabled={cantSubmit}
            onClick={submitImport}
          />
          {showReport && <ImportReport id={importId} />}
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default App;
