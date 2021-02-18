import { Content } from "antd/lib/layout/layout";
import styles from '../../styles/content.module.scss'

export default function Section({ id, children, style }) {
    return (
        <Content
            id={ id }
            className={ styles[style] }>
            {
                children
            }
        </Content>
    )
}