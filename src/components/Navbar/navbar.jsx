import { Col, Image, Row } from "antd";
import Layout, { Header } from "antd/lib/layout/layout";
import styles from '../../styles/navbar.module.scss'
import { MenuOutlined } from '@ant-design/icons'
import NavbarSide from "./navbar-side";
import { useCallback, useEffect, useState } from "react";
import NavbarMenu from "./navbar-menu";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [styleNavbarScroll, setStyleNavbarScroll] = useState(styles.navbar)

    const handleNavbarOpen = useCallback(state => {
        setNavbarOpen(state)
    }, [setNavbarOpen]);

    useEffect(() => {
        let listener = document.addEventListener("scroll", e => {
            const classNameNavbarScroll = window.scrollY <= 105 ? styles.navbar : styles.navbarScroll
            setStyleNavbarScroll(classNameNavbarScroll)
        })
        return () => document.removeEventListener("scroll", listener)
    }, [styleNavbarScroll])

    return (
        <Layout>
            <Header 
                className={ styleNavbarScroll }>
                    <Row
                        className={ styles.rowNavbar }>
                        <Col span={ 4 }>
                            <Image 
                                src={ require("../../assets/images/logo.png") }
                                className={ styles.logoNavbar }
                                preview={ false }
                                width={ 60 }
                                height={ 60 }
                                alt="logo" />
                        </Col>
                        <Col span={ 19 }>
                            <NavbarMenu 
                                mode="horizontal"
                                className={ styles.menuNavbarTop }
                                classNameItem={ styles.itemMenuNavbarTop }/>
                        </Col>
                        <Col 
                            span={ 1 }>
                            <MenuOutlined 
                                onClick={ _ => handleNavbarOpen(!navbarOpen) }
                                className={ styles.menuButtonNavbarLateral }
                                style={{ marginTop: "12px" }}
                                alt="menu-icon" />
                        </Col>
                    </Row>
            </Header>
            <NavbarSide 
                open={ navbarOpen }
                openNavbar={ handleNavbarOpen }/>
        </Layout>
    )
}