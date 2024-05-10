import React from 'react';
import {
  Box, Typography, Card, CardContent, CardMedia, Grid, CssBaseline, Paper, Table, TableBody, TableCell, TableRow, TableContainer
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define a custom theme for styling
const theme = createTheme({
  palette: {
    background: {
      default: 'linear-gradient(180deg, #0f0c29, #302b63, #24243e)'
    },
    primary: {
      main: '#B0C4DE',
    },
    text: {
      primary: '#FFFFFF',  // Assuming light text for the dark background
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          cursor: 'pointer',
          '&:hover': {
            boxShadow: '0px 5px 20px rgba(255, 255, 255, 0.3)', // Lighter shadow for contrast
          },
          margin: '20px 0',
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent cards for design consistency
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent', // To keep the background consistent
          boxShadow: 'none', // Removes shadow for a cleaner look
        }
      }
    }
  },
});

function HomePage() {
  // Sample data for demonstration
  const candidates = [
    { name: "Alice Johnson", logo: "/images/alice-logo.png", color: '#FFCDD2' },
    { name: "Bob Smith", logo: "/images/bob-logo.png", color: '#C8E6C9' },
    { name: "Carol White", logo: "/images/carol-logo.png", color: '#BBDEFB' },
  ];

  const handleClick = (name) => {
    console.log("You voted for: ", name);
    // Implement voting logic or redirection here
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh" 
      sx={{ flexGrow: 1, background: theme.palette.background.default, p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center', py: 2 }}>
          Cast Your Vote
        </Typography>
        
        <Paper elevation={0} sx={{ p: 2, marginBottom: 3 }}>
          <TableContainer component={Paper}>
            <Table aria-label="voter information">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Voter ID: XXXX1234
                  </TableCell>
                  <TableCell align="right">
                    Location: Your City
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Grid container spacing={2} justifyContent="center">
          {candidates.map((candidate, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  bgcolor: candidate.color,
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
                onClick={() => handleClick(candidate.name)}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={candidate.logo}
                  alt={`Logo of ${candidate.name}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="text.primary">
                    {candidate.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default HomePage;
