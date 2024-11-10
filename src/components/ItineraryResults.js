import React from "react";
import { Box, Card, CardContent, Typography, Divider, Grid, Chip } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ItineraryResults = ({ itineraries }) => {
  if (!itineraries.length) {
    return <Typography variant="body1">No itineraries found.</Typography>;
  }

  return (
    <Box sx={{ mt: 4 }}>
      {itineraries.map((itinerary) => (
        <Card key={itinerary.itinerary_id} sx={{ mb: 3, boxShadow: 3 }}>
          <CardContent>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Typography variant="h6" color="primary">
                  {itinerary.origin} - {itinerary.destination}
                </Typography>
              </Grid>
              <Grid item>
                <Chip
                  icon={<AccessTimeIcon />}
                  label={`${itinerary.total_duration} mins`}
                  color="primary"
                  size="small"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Typography variant="body2" color="textSecondary" sx={{ mt: 1, mb: 2 }}>
              Route: {itinerary.route.join(" -> ")}
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" color="secondary">
              Segments
            </Typography>

            {itinerary.segments.map((segment, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  mb: 2,
                  p: 2,
                  backgroundColor: "rgba(240, 248, 255, 0.5)",
                  borderRadius: "8px",
                }}
              >
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <FlightTakeoffIcon color="action" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body2">
                      <strong>{segment.origin}</strong> → <strong>{segment.destination}</strong>
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      ({segment.duration} mins)
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Chip
                      label={segment.frequency}
                      color="secondary"
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ my: 1 }} />

                <Typography variant="subtitle2" color="primary" sx={{ mt: 1 }}>
                  <ScheduleIcon fontSize="small" /> Schedules:
                </Typography>

                {segment.schedules.map((schedule, i) => (
                  <Box key={i} sx={{ ml: 2, mt: 1 }}>
                    <Typography variant="body2">
                      📅 Date: {schedule.date}
                    </Typography>
                    <Typography variant="body2">
                      ⏰ Departure: {schedule.departure_time} - Arrival: {schedule.arrival_time}
                    </Typography>
                  </Box>
                ))}
              </Card>
            ))}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ItineraryResults;
