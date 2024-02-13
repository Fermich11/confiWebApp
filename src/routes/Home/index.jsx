import {
    Box,
    Button,
    Paper,
    Avatar
} from '@mui/material';

export function Home() {


    return (
        <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4
            }}
        >
            <Button variant='contained' size='large' >
                Pedir Servicio
            </Button>
            <Paper variant='elevation' sx={{ width: '100%' }}  elevation={6}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        m: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                    <p><b>Pendiente</b></p>
                    <p>03/12/2024</p>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 2,
                            my: 2,
                        }}
                    >
                        <Avatar
                            sx={{ width: 56, height: 56 }}
                            alt='driver'
                            src='https://www.profilebakery.com/wp-content/uploads/2023/03/AI-Profile-Picture.jpg'
                        />
                        <span>Alfonso Guitierrez Lopez</span>
                    </Box>
                </Box>
            </Paper>
            <Paper variant='elevation' sx={{ width: '100%' }} elevation={6}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        m: 2,
                        w: '100%'
                    }}
                >
                    <p><b>Servicio: en proceso</b></p>
                    <span>Fecha: 10/01/2024</span>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        <Avatar
                            sx={{ width: 56, height: 56 }}
                            alt='driver'
                            src='https://media.istockphoto.com/id/1275841852/photo/smiling-young-man-having-online-conference-from-home-office.jpg?s=612x612&w=0&k=20&c=4Z47U2JoRl5sJ8lPWZdCnEv706fePcWBSDhoyQnrd3Y='
                        />
                        <span>Juan Perez Lopez</span>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}