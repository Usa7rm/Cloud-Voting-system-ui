import React, { useState } from 'react';
import { TextField, Button, Paper, Box, Typography, CssBaseline, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: 'linear-gradient(180deg, #a7c0dc, #ffffff)'
    },
    primary: {
      main: '#6a89cc',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
          padding: '40px',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'grey',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'blue',
            },
          },
        },
      }
    },
  },
});

function SignupPage() {
  const [role, setRole] = useState('voter');

  const handleChange = (event) => {
    setRole(event.target.value);
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
        sx={{
          background: theme.palette.background.default,
        }}
      >
        <Paper elevation={3}>
          <Box width={400} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5" color="textPrimary" gutterBottom>
              Sign Up
            </Typography>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              autoFocus
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <FormControl component="fieldset" sx={{ mt: 2 }}>
              <FormLabel component="legend">Register As</FormLabel>
              <RadioGroup
                row
                aria-label="role"
                name="row-radio-buttons-group"
                value={role}
                onChange={handleChange}
              >
                <FormControlLabel value="voter" control={<Radio />} label="Voter" />
                <FormControlLabel value="candidate" control={<Radio />} label="Candidate" />
              </RadioGroup>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default SignupPage;
