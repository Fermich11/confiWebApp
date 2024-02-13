import { Paper, Box, Grid, Typography, TextField, Button } from '@mui/material';

export function RecoverPassword() {

    return(
        <Grid 
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6} 
          square
          marginLeft={3}
          marginRight={3}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ my: 4 }}>
              Recuperar Contraseña
            </Typography>
            
            <TextField 
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoFocus
            />
            <TextField 
              margin="normal"
              required
              fullWidth
              id="confirmEmail"
              label="Confirmar correo"
              name="confirmEmail"
              autoFocus
            />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Enviar correo
              </Button>
          </Box>
        </Grid>
    );
}