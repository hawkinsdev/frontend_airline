import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { getAirports } from '../services/api';

const ItinerarySearch = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const airportData = await getAirports();
        setAirports(airportData?.data);
      } catch (error) {
        console.error('Error fetching airports:', error);
      }
    };

    fetchAirports();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(origin, destination);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Search Itineraries
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Origin</InputLabel>
        <Select
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          required
          label="Origin"
        >
          {airports?.map((airport) => (
            <MenuItem key={airport.id} value={airport.id}>
              {airport.name_combined}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Destination</InputLabel>
        <Select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
          label="Destination"
        >
          {airports.map((airport) => (
            <MenuItem key={airport.id} value={airport.id}>
              {airport.name_combined}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Search
      </Button>
    </Box>
  );
};

export default ItinerarySearch;
