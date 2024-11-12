import React, { useState } from 'react';
import {Box, Container, Typography } from '@mui/material';
import ItinerarySearch from './components/ItinerarySearch';
import ItineraryResults from './components/ItineraryResults';
import CircularProgress from '@mui/material/CircularProgress';
import { searchItineraries } from './services/api';

const App = () => {
  const [itineraries, setItineraries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (origin, destination) => {
    setIsLoading(true);
    const results = await searchItineraries(origin, destination);
    setItineraries(results);
    setIsLoading(false);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Airline Itinerary Search
      </Typography>
      <ItinerarySearch onSearch={handleSearch} />
      {isLoading ?  <Box sx={{display: 'flex', justifyItems: 'center', alignItems: 'center', height: 150}} >
        <CircularProgress sx={{mx: 'auto'}} /> 
      </Box> 
      : <ItineraryResults itineraries={itineraries} />}
    </Container>
  );
};

export default App;
