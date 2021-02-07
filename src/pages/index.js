import { Card, Col, Image, Row, Tag } from "antd";
import Layout from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import Navbar from "../components/Navbar/navbar";
import Particle from "../components/Particle/particle";
import Section from '../components/Section/section'
import stylesFont from '../styles/font.module.scss'
import stylesImage from '../styles/image.module.scss'
import stylesCard from '../styles/card.module.scss'

export default function Main() {
    return (
        <Layout>
            <Navbar />
            <Section style={ "contentBanner" }>
                <Particle 
                    height={ 980 }
                    type={ "particles" }
                    color={ "#ffffff" } />
                <Section style={ "contentInfoBanner" }>
                    <Row type="flex" style={{ marginTop: "200px" }}>
                        <Col span={ 24 } style={{ textAlign: "center" }}>
                            <Title className={ stylesFont.fontTitleBanner }>
                                Luis Eduardo <br/>
                                Mamani Bedregal
                            </Title>
                            <Title className={ stylesFont.fontSubTitleBanner }>
                                Ingeniero de Sistemas
                            </Title>
                        </Col>
                    </Row>
                </Section>
            </Section>
            <Section style={ "contentInformation" }>
                <Particle 
                    height={ 980 }
                    type={ "particles" }
                    color={ "#272839" } />
                <Section style={ "contentInfoInformation" }>
                    <Row type="flex" align="middle" gutter={[40, 16]}>
                        <Col xs={ 24 } lg={ 10 } md={ 11 }>
                            <Image
                                src={ require("../assets/images/profile.jpg") }
                                className={ stylesImage.contentInfoImageInformation }
                                preview={ false } />
                        </Col>
                        <Col xs={ 24 } lg={ 14 } md={ 13 }>
                            <Card 
                                bordered={false} 
                                className={ stylesCard.cardInfoInformation }>
                                <Title className={ stylesFont.fontInfoInformation }>
                                    Profesional en Ingeniería de Sistemas, { new Date().getFullYear() - 1996 } años de edad,
                                    autodidacta, formado con valores, apasionado por los cambios y avances tecnológicos, el 
                                    trabajo en equipo, cuidado del medio ambiente, y la música.
                                </Title>
                                <div>
                                    <Tag color="#272839">País: Perú</Tag>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Section>
            </Section>
        </Layout>
    )
}