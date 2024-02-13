import React from 'react';
import ReactDom from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import { Header } from './components/header/index';
import { PickUp } from './routes/PickUp/PickUp';
import { SignIn } from './routes/signIn/signIn';
import { Login } from './routes/Login/Login';
import { Home } from './routes/Home';
import { RecoverPassword } from './routes/recoverPassword/recoverPassword';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/colorTheme/colortTheme';
import './index.css';

const router = createBrowserRouter([
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'pickLocation',
        element: <PickUp />
    },
    {
        path: '/',
        element: <Home />
    }, 
    {
        path: 'signIn',
        element: <SignIn />
    }, {
        path: 'recoverPassword',
        element: <RecoverPassword />
    }
]);


ReactDom
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <>
                    <Header />
                    <RouterProvider router={router}/>
                </>
            </ThemeProvider>
        </React.StrictMode>
    );