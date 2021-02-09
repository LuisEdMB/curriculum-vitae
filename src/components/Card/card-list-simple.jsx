import { AimOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import stylesFont from '../../styles/font.module.scss'
import stylesCard from '../../styles/card.module.scss'
import * as utils from '../../utils'
import Title from "antd/lib/typography/Title";
import Link from "antd/lib/typography/Link";

export default function CardListSimple({ title, list }){
    return (
        <Card
            className={ stylesCard.cardInfoInformation }
            title={ <Title 
                level={ 2 }
                className={ stylesFont.fontCardH2 }>{ title }</Title> }>
                <List
                    dataSource={ list }
                    renderItem={item => (
                        <List.Item key={ item.id }>
                            <List.Item.Meta
                                avatar={ <AimOutlined /> }
                                title={ <Title 
                                    level={ 3 }
                                    className={ stylesFont.fontCardH3 }>{ item.title } ({ item.fromYear } - { item.toYear })</Title> }
                                description={
                                    <>
                                        <Title 
                                            level={ 4 }
                                            className={ stylesFont.fontCardH4 }>{ item.university }</Title>
                                        <Title
                                            level={ 5 }
                                            className={ stylesFont.fontCardH5 }>
                                                {
                                                    utils.isUrl(item.url)
                                                        ? <Link href={ item.url } target="_blank">
                                                            { item.details }
                                                            </Link>
                                                        : `${item.details} ${item.url}`
                                                }
                                        </Title>
                                    </>
                                }
                            />
                        </List.Item>
                )} />
        </Card>
    )
}