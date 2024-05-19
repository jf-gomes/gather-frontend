import logo from '../../assets/logo.png'

//Drawer imports
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

interface HeaderProps{
    size: number
}

export default function Header({ size }: HeaderProps){

    //Drawer settings
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
          <p>Gaveta</p>
        </Box>
      );

    if (size > 620){
        return (
            <header className='flex items-center'>
                <img src={logo} alt="" className='w-40' />
                <p className='font-bold'>O seu portifólio de cursos virtuais!</p>
            </header>
        )
    } else {
        return (
            <header>
                <div className='flex flex-col items-center'>
                    <img src={logo} alt="" className='w-28' />
                    <p className='font-bold text-sm'>O seu portifólio de cursos virtuais!</p>
                    <Button onClick={toggleDrawer(true)}>Filtros</Button>
                </div>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </header>
        )
    }
}