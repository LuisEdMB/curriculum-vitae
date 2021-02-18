import { Rate } from "antd";
import Title from "antd/lib/typography/Title";
import stylesFont from '../../styles/font.module.scss'

export default function RateScore({ id, text, score }){
    return (
        <Title 
            key={ id }
            level={ 4 }
            className={ stylesFont.fontCardH4 }>
                { text }
                <div
                    style={{ textAlign: "right" }}>
                    <Rate 
                        disabled
                        value={ score }/>
                </div>
        </Title>
    )
}