import stylesFont from '../../styles/font.module.scss'
import stylesCard from '../../styles/card.module.scss'
import { Button, Card, Image, Tooltip } from 'antd'
import Title from 'antd/lib/typography/Title'
import * as Const from "../../constants"
import Meta from 'antd/lib/card/Meta'
import IconSvg from '../Icon/icon-svg'

export default function CardProjectSimple(data){
    return (
        <Card
            key={ data.id }
            className={ stylesCard.cardInfoInformation }
            cover={
                <Image
                    src={ Const.projectsImages[data.image] }
                    alt={ data.title } />
            }
            actions={
                data.links.map(item => 
                    <Tooltip 
                        key={ item.id }
                        title={ item.tooltip }>
                        <Button 
                            shape="circle" 
                            icon={ Const.projectsLogosLinks[item.type] } 
                            href={ item.link } 
                            target="_blank"
                            rel="noreferrer" />
                    </Tooltip>)
            }>
                <Meta
                    title={
                        <Title 
                            level={ 3 }
                            className={ stylesFont.fontCardH3 }>{ data.title }</Title>
                    }
                    description={
                        <>
                            <Title
                                level={ 5 }
                                className={ stylesFont.fontCardH5 }>{ data.description }</Title>
                            <Title
                                level={ 3 }
                                className={ stylesFont.fontCardH3 }>
                                    Tecnologías: <br/>
                                    {
                                        data.technologies.map(item => 
                                            <IconSvg 
                                                key={ item.id }
                                                { ...item } />)
                                    }
                            </Title>
                        </>
                    }
                />
        </Card>
    )
}