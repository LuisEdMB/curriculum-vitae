import { Content } from "antd/lib/layout/layout";
import styles from '../../styles/content.module.scss'

export default function Section({ children, style }) {
    return (
        <Content
            className={ styles[style] }>
            {
                children
            }
        </Content>
    )
}