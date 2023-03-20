import React from "react";
import "./NavBar.css";
import ShoppingCartCheckoutIcon from "../CartWidget/CartWidget" 

const NavBar = () => {
    return (
        <nav className="Navigation">
            <ul className="List-ul">
                <li>
                    <h1>I N F L A C I O N </h1>
                </li>
                <li>
                    <a href="https://www.instagram.com/inflacion.billeterasdepapel/" 
                    >Home</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/inflacion.billeterasdepapel/">Nosotros</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/inflacion.billeterasdepapel/">Contacto</a>
                </li>
                <li>
                    <ShoppingCartCheckoutIcon />
                </li>
            </ul>
        </nav>    
    )
}

export default NavBar;






// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// export default function ButtonAppBar() {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" >
//             <Toolbar >
//                 <IconButton
//                     size="large"
//                     edge="start"
//                     color="inherit"
//                     aria-label="menu"
//                     sx={{ mr: 2 }}
//                 >
//                     <MenuIcon />
//                 </IconButton>
//                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                     News
//                 </Typography>
//                 <Button color="inherit">Carrito</Button>
//             </Toolbar>
//         </AppBar>
//         </Box>
//     );
// }