import SearchIcon from '@mui/icons-material/Search';
import dayjs from 'dayjs';
import { TextField, Stack, Container, InputLabel, Button } from '@mui/material';
import { MarkerMap } from '../../components/map/map';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers/';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export function PickUp() {
    return(
        <Stack
            direction="column"
            justifyContent="center"
            spacing={4}
            margin={4}
        >
            <Container>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <SearchIcon/>
                    <TextField className="search" label="Donde te recojo?" variant="filled"/>
                </Stack>
            </Container>
            <MarkerMap/>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="end"
                spacing={2}
            >
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker 
                        label="Selecciona hora y dia"
                        defaultValue={dayjs()}
                        sx={{width: '38rem'}}
                    />
                    <Stack>
                        <InputLabel>
                            Horas
                        </InputLabel>
                        <TextField
                            type="number"
                        />
                    </Stack>
                
                </LocalizationProvider>
            </Stack>
            <Button variant='contained'>Pedir servicio</Button>
        </Stack>
    );
}