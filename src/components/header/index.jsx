import { AppBar, Box, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/logo1';
import './styles.css';

export function Header() {
    return(
        <>
            <Box sx={{ display: 'flex'}}>
                <AppBar position='relative'>
                    <Toolbar 
                        sx={{ my: 2, justifyContent: 'space-between' }}
                    >
                        <Logo width='200px' height='35px'/>
                        <MenuIcon fontSize='large'/>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}