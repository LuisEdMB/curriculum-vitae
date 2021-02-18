import { Menu } from "antd";

export default function NavbarMenu({ mode, className, classNameItem }) {
    return (
        <Menu 
            mode={ mode } 
            defaultSelectedKeys={ ['1'] }
            className={ className }>
                <Menu.Item 
                    key="1">
                        <a 
                            href="#inicio" 
                            className={ classNameItem }>
                            Inicio
                        </a>
                </Menu.Item>
                <Menu.Item 
                    key="2">
                        <a 
                            href="#informacion" 
                            className={ classNameItem }>
                            Información
                        </a>
                </Menu.Item>
                <Menu.Item 
                    key="3">
                        <a 
                            href="#estudios" 
                            className={ classNameItem }>
                            Estudios
                        </a>
                </Menu.Item>
                <Menu.Item 
                    key="4">
                        <a 
                            href="#experiencia-laboral" 
                            className={ classNameItem }>
                            Experiencia Laboral
                        </a>
                </Menu.Item>
                <Menu.Item 
                    key="5">
                        <a 
                            href="#habilidades" 
                            className={ classNameItem }>
                            Habilidades
                        </a>
                </Menu.Item>
                <Menu.Item 
                    key="6">
                        <a 
                            href="#proyectos" 
                            className={ classNameItem }>
                            Proyectos
                        </a>
                </Menu.Item>
                <Menu.Item 
                    key="7">
                        <a 
                            href="#contactos" 
                            className={ classNameItem }>
                            Contactos
                        </a>
                </Menu.Item>
        </Menu>
    )
}