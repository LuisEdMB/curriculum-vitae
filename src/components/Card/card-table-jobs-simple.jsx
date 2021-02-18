import { Card, Descriptions } from "antd";
import stylesFont from '../../styles/font.module.scss'
import stylesCard from '../../styles/card.module.scss'
import Title from "antd/lib/typography/Title";
import { AimOutlined } from "@ant-design/icons";

export default function CardTableJobsSimple({ title, data }){
    return (
        <Card
            className={ stylesCard.cardInfoInformation }
            title={ <Title 
                level={ 2 }
                className={ stylesFont.fontCardH2 }>{ title }</Title> }>
                    {
                        data.map(item => 
                            <div
                                key={ item.id }>
                                <Descriptions
                                    layout={ "vertical" }
                                    key={ item.id }
                                    size={ "small" }
                                    bordered>
                                        <Descriptions.Item label={ 
                                            <Title 
                                                level={ 3 }
                                                className={ stylesFont.fontCardH3 }>Cargo</Title>}
                                            span={ 2 }>
                                                <Title 
                                                    level={ 4 }
                                                    className={ stylesFont.fontCardH4 }>{ item.position }</Title>
                                        </Descriptions.Item>
                                        <Descriptions.Item label={ 
                                            <Title 
                                                level={ 3 }
                                                className={ stylesFont.fontCardH3 }>Tiempo</Title>}
                                            span={ 2 }>
                                                <Title 
                                                    level={ 4 }
                                                    className={ stylesFont.fontCardH4 }>{ item.from } - { item.to }</Title>
                                        </Descriptions.Item>
                                        <Descriptions.Item label={ 
                                            <Title 
                                                level={ 3 }
                                                className={ stylesFont.fontCardH3 }>Empresa</Title>}
                                            span={ 4 }>
                                                <Title 
                                                    level={ 4 }
                                                    className={ stylesFont.fontCardH4 }>{ item.enterprise } ({ item.location })</Title>
                                        </Descriptions.Item>
                                        <Descriptions.Item label={ 
                                            <Title 
                                                level={ 3 }
                                                className={ stylesFont.fontCardH3 }>Actividades</Title>
                                        } span={ 4 }>
                                            {
                                                item.activities.map(activity => 
                                                    <Title
                                                        key={ activity.id }
                                                        level={ 5 }
                                                        className={ stylesFont.fontCardH5 }><AimOutlined /> { activity.description }</Title>)
                                            }
                                        </Descriptions.Item>
                                        <Descriptions.Item label={ 
                                            <Title 
                                                level={ 3 }
                                                className={ stylesFont.fontCardH3 }>Tecnologías</Title>
                                        } span={ 4 }>
                                            {
                                                item.technologies.map(technology => 
                                                    <Title
                                                        key={ technology.id }
                                                        level={ 5 }
                                                        className={ stylesFont.fontCardH5 }>
                                                            <AimOutlined /> { technology.type }: {
                                                                technology.technology.map(value => value.text).join(", ")
                                                            }
                                                        </Title>)
                                            }
                                        </Descriptions.Item>
                                </Descriptions>
                                <br/>
                            </div>)
                    }
        </Card>
    )
}