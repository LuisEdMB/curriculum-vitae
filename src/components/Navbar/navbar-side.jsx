import React from 'react'
import { Drawer } from "antd";
import NavbarMenu from './navbar-menu';
import styles from '../../styles/navbar.module.scss'

function NavbarSide({ open, openNavbar }) {
    const handleOpenNavbar = _ => {
        openNavbar(!open)
    }

    return (
        <Drawer
            visible={ open }
            placement="right"
            closable={ false }
            width={ 200 }
            onClose={ _ => handleOpenNavbar() }>
                <NavbarMenu 
                    mode="vertical"
                    className={ styles.menuNavbarLateral }
                    classNameItem={ styles.itemMenuNavbarLateral }/>
        </Drawer>
    )
}

export default React.memo(NavbarSide)