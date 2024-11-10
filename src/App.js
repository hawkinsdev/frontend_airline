import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import ItinerarySearch from './components/ItinerarySearch';
import ItineraryResults from './components/ItineraryResults';
import { searchItineraries } from './services/api';

const App = () => {
  const [itineraries, setItineraries] = useState([]);

  const handleSearch = async (origin, destination) => {
    const results = await searchItineraries(origin, destination);
    setItineraries(results);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Airline Itinerary Search
      </Typography>
      <ItinerarySearch onSearch={handleSearch} />
      <ItineraryResults itineraries={itineraries} />
    </Container>
  );
};

export default App;
