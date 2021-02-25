import stylesFont from '../../styles/font.module.scss'
import stylesCard from '../../styles/card.module.scss'
import { Button, Card, Image, Tooltip } from 'antd'
import Title from 'antd/lib/typography/Title'
import * as Const from "../../constants"
import Meta from 'antd/lib/card/Meta'
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons'
import IconSvg from '../Icon/icon-svg'

export default function CardProjectSimple(data){
    return (
        <Card
            key={ data.id }
            className={ stylesCard.cardInfoInformation }
            cover={
                <Image
                    src={ Const.projectsImages[data.image] }/>
            }
            actions={
                [
                    <Tooltip 
                        title="Github">
                        <Button 
                            shape="circle" 
                            icon={<GithubOutlined />} 
                            href={ data.link_github } 
                            target="_blank"
                            rel="noreferrer" />
                    </Tooltip>,
                    <Tooltip title="URL">
                        <Button 
                            shape="circle" 
                            icon={<GlobalOutlined />} 
                            href={ data.link } 
                            target="_blank"
                            rel="noreferrer" />
                    </Tooltip>
                ]
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