import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Box, Card, Typography, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define a custom dark theme
const theme = createTheme({
  palette: {
    background: {
      default: 'linear-gradient(180deg, #0f0c29, #302b63, #24243e)'
    },
    primary: {
      main: '#B0C4DE',
    },
    text: {
      primary: '#23272c',
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 10,
          padding: '20px',
          margin: '20px',
          '&:hover': {
            boxShadow: '0px 5px 20px rgba(255, 255, 255, 0.3)',
          }
        }
      }
    }
  },
});

function WinnerAnnouncement() {
  const fadeIn = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { duration: 1000 },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}>
        <animated.div style={fadeIn}>
          <Card>
            <Typography variant="h4" component="h2" color="primary.main" gutterBottom>
              Winner's Name: Alice Johnson
            </Typography>
            <Typography variant="body1" color="text.primary">
              Congratulations on your remarkable achievement!
            </Typography>
          </Card>
        </animated.div>
      </Box>
    </ThemeProvider>
  );
}

export default WinnerAnnouncement;
