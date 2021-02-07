import { Menu } from "antd";

export default function NavbarMenu({ mode, className, classNameItem }) {
    return (
        <Menu 
            mode={ mode } 
            defaultSelectedKeys={ ['1'] }
            className={ className }>
                <Menu.Item 
                    key="1"
                    className={ classNameItem }>Inicio</Menu.Item>
                <Menu.Item 
                    key="2"
                    className={ classNameItem }>Información</Menu.Item>
                <Menu.Item 
                    key="3"
                    className={ classNameItem }>Estudios</Menu.Item>
                <Menu.Item 
                    key="4"
                    className={ classNameItem }>Experiencia Laboral</Menu.Item>
                <Menu.Item 
                    key="5"
                    className={ classNameItem }>Habilidades</Menu.Item>
                <Menu.Item 
                    key="6"
                    className={ classNameItem }>Proyectos</Menu.Item>
                <Menu.Item 
                    key="7"
                    className={ classNameItem }>Contactos</Menu.Item>
        </Menu>
    )
}