import { Card, Col, Image, Row, Tag } from "antd";
import Layout from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import Navbar from "../components/Navbar/navbar";
import Particle from "../components/Particle/particle";
import Section from '../components/Section/section'
import stylesFont from '../styles/font.module.scss'
import stylesImage from '../styles/image.module.scss'
import stylesCard from '../styles/card.module.scss'
import data from '../data/data.json'
import CardTableJobsSimple from "../components/Card/card-table-jobs-simple";
import CardListStudiesSimple from "../components/Card/card-list-studies-simple";
import * as utils from "../utils";
import CardListRateSimple from "../components/Card/card-list-rate-simple";
import CardProjectSimple from "../components/Card/card-project-simple";

export default function Main() {
    let studies = data.studies
    let jobs = data.jobs
    let skills = utils.assignValueToArrayWithLimit(data.skills, "position", 3)
    let projects = utils.assignValueToArrayWithLimit(data.projects, "position", 3)

    return (
        <Layout>
            <Navbar />
            <Section style={ "contentBanner" } >
                <Particle  
                    type={ "particles" }
                    color={ "#272839" } />
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
            <Section style={ "contentStudies" }>
                <Section style={ "contentInfoStudies" }>
                    <Row type="flex" align="middle" gutter={[40, 40]}>
                        <Col xs={ 24 } lg={ 12 } md={ 24 } >
                            <CardListStudiesSimple 
                                title="Estudios"
                                list={ studies.academics }/>
                        </Col>
                        <Col xs={ 24 } lg={ 12 } md={ 24 }>
                            <CardListStudiesSimple 
                                title="Cursos"
                                list={ studies.courses }/>
                        </Col>
                    </Row>
                </Section>
            </Section>
            <Section style={ "contentJobs" }>
                <Section style={ "contentInfoJobs" }>
                    <CardTableJobsSimple 
                        title={ "Experiencia Laboral" }
                        data={ jobs }/>
                </Section>
            </Section>
            <Section style={ "contentSkills" }>
                <Section style={ "contentInfoSkills" }>
                    <Row type="flex" align="middle" gutter={[40, 40]}>
                        <Col xs={ 24 } lg={ 8 } md={ 24 } >
                            <CardListRateSimple 
                                data={ skills.filter(skill => skill.position === 1) }/>
                        </Col>
                        <Col xs={ 24 } lg={ 8 } md={ 24 } >
                            <CardListRateSimple 
                                data={ skills.filter(skill => skill.position === 2) }/>
                        </Col>
                        <Col xs={ 24 } lg={ 8 } md={ 24 } >
                            <CardListRateSimple 
                                data={ skills.filter(skill => skill.position === 3) }/>
                        </Col>
                    </Row>
                </Section>
            </Section>
            <Section style={ "contentProjects" }>
                <Section style={ "contentInfoProjects" }>
                <Row type="flex" align="middle" gutter={[40, 40]}>
                        <Col xs={ 24 } lg={ 8 } md={ 24 } >
                            {
                                projects.filter(project => project.position === 1).map(project => 
                                    <CardProjectSimple 
                                        key={ project.id }
                                        { ...project } />)
                            }
                        </Col>
                        <Col xs={ 24 } lg={ 8 } md={ 24 } >
                            {
                                projects.filter(project => project.position === 2).map(project => 
                                    <CardProjectSimple 
                                        key={ project.id }
                                        { ...project } />)
                            }
                        </Col>
                        <Col xs={ 24 } lg={ 8 } md={ 24 } >
                            {
                                projects.filter(project => project.position === 3).map(project => 
                                    <CardProjectSimple 
                                        key={ project.id }
                                        { ...project } />)
                            }
                        </Col>
                    </Row>
                </Section>
            </Section>
        </Layout>
    )
}