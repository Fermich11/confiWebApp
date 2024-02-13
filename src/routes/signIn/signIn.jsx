import React from 'react';
import { Avatar, Button, TextField, Paper, Box, Grid, Tabs, Tab, Typography } from '@mui/material';
import { Person2Outlined } from '@mui/icons-material';

function UserData() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
          <Person2Outlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Datos de usuario
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nombre"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Apellidos"
            name="lastname"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Numero de celular"
            name="phone"
            autoFocus
          />
        </Box>
      </Box>
  );
}

function Password() {
  return(
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 2,
      }}
    > 
      <Typography component="h1" variant="h5">
        Ingresa tu contraseña
      </Typography>
      <TextField
        type='password'
        margin="normal"
        required
        fullWidth
        id="password"
        label="contraseña"
        name="password"
        autoFocus
      />
      <TextField
        type='password'
        margin="normal"
        required
        fullWidth
        id="re-enter-password"
        label="confirma la contraseña"
        name="re-enter-password"
        autoFocus
      />
    </Box>
  );
}

export function SignIn() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <Box
          sx={{ 
            borderColor: 'divider',
            marginLeft: 2,
            marginRight: 2,
            marginTop: 2,
          }}
        >
          <Tabs value={value} onChange={handleChange} aria-label="steps">
            <Tab label="Datos de usuario" id="tab-0"/>
            <Tab label="Contraseña" id="tab-1"/>
          </Tabs>
          <Grid 
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6} 
            square
            px={4}
          >
            {
              value === 0 ? UserData() : Password()
            }
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 4,
              }}
            >
              <Button
                type="button"
                fullWidth
                variant="contained"
                color='secondary'
                sx={{ mt: 3, mb: 2 }}
              >
                Regresar
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color='primary'
                sx={{ mt: 3, mb: 2 }}
              >
                Confirmar
              </Button>
            </Box>
          </Grid >
        </Box>
    );
}