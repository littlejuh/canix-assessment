import React, { useEffect, useState, useMemo } from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import { getWeighIn } from '../api/imports';

const ImportReport = ({ id }) => {
  const [weighIn, setWeighIn] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeighIn = async () => {
      try {
        const weighIn = await getWeighIn(id);
        setWeighIn(weighIn);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchWeighIn();
  }, [id]);

  const columns = useMemo(() => [
    {
      header: 'Category',
      accessorKey: 'category',
    },
    {
      header: 'Product',
      accessorKey: 'product_name',
      enableGrouping: false,
    },
    {
      header: 'Weight(kilogram)',
      accessorKey: 'weight',
      Cell: ({ cell }) => <>{cell.getValue()} kg</>,
      enableGrouping: false,
      aggregationFn: 'sum',
      AggregatedCell: ({ cell, table }) => (
        <>
          Total in {table.getColumn(cell.row.groupingColumnId ?? '').columnDef.accessorKey}:{' '}
          <Box sx={{ display: 'inline', fontWeight: 'bold' }}> {cell.getValue().toFixed(2)} kg </Box>
        </>
      ),
    },
  ], []);

  if (loading) {
    return <CircularProgress color="secondary" size={40} />;
  }

  if (weighIn.weights.length === 0) {
    return <Typography variant="body1">No data available.</Typography>;
  }

  return (
    <>
      <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        Weighing process started: {weighIn.started_at}
      </Typography>
      <MaterialReactTable
        title="Import report"
        columns={columns}
        data={weighIn.weights}
        enableTopToolbar={false}
        enableColumnActions={false}
        enablePagination={false}
        enableGrouping
        enableStickyHeader
        enableStickyFooter
        initialState={{
          density: 'comfortable',
          expanded: false,
          grouping: ['category'],
          sorting: [{ id: 'category', desc: false }],
        }}
      />
    </>
  );
};

export default ImportReport;
