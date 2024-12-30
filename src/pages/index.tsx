import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
} from '@mui/material';

const LoginPage: React.FC = () => {
  return (
    <Box bgcolor="#f5f5f5" height="100vh" display="flex" flexDirection="column">
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: 'black' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="bold">
            Logileads
          </Typography>
          <Box display="flex" gap={2}>
            <Typography variant="body1">Home</Typography>
            <Typography variant="body1">About</Typography>
            <Typography variant="body1">Contact</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Grid container height="100%">
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="#c4c4c4"
        >
          <Typography variant="h4" fontWeight="bold" color="white">
            Logileads
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bgcolor="white"
          px={{ xs: 2, md: 4 }}
        >
          <Typography variant="h5" fontWeight="bold" mb={3}>
            Log In
          </Typography>
          <TextField
  variant="outlined"
  label="Name"
  fullWidth
 
  sx={{
  
    borderRadius: '4px 4px 4px 4px',
    border: '2px solid #000000CC',
   
    //opacity: 0,
  }}
/>          <TextField variant="outlined" label="Phone number" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2, mb: 1 }}>
            Log In
          </Button>
          <Typography variant="body2" color="textSecondary" mb={2}>
            If you're not an existing user
          </Typography>
          <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
            Sign Up
          </Button>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="I agree to the terms and conditions"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
