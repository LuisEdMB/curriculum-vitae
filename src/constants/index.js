import ReactSvg from '../assets/images/projects/technologies-logos/react.svg'
import NextJsSvg from '../assets/images/projects/technologies-logos/nextjs.svg'
import SassSvg from '../assets/images/projects/technologies-logos/sass.svg'
import AntDesignSvg from '../assets/images/projects/technologies-logos/ant-design.svg'
import AngularSvg from '../assets/images/projects/technologies-logos/angular.svg'
import MaterialUiSvg from '../assets/images/projects/technologies-logos/material-ui.svg'
import GraphQlSvg from '../assets/images/projects/technologies-logos/graphql.svg'
import NodeJsSvg from '../assets/images/projects/technologies-logos/node-js.svg'
import ExpressSvg from '../assets/images/projects/technologies-logos/express.svg'
import MongoDbSvg from '../assets/images/projects/technologies-logos/mongo-db.svg'
import Dotnet5Svg from '../assets/images/projects/technologies-logos/dotnet5.svg'
import RedisSvg from '../assets/images/projects/technologies-logos/redis.svg'
import PostgreSQLSvg from '../assets/images/projects/technologies-logos/postgresql.svg'
import SqlServerSvg from '../assets/images/projects/technologies-logos/sql-server.svg'
import RabbitMQSvg from '../assets/images/projects/technologies-logos/rabbitmq.svg'
import MassTransitPng from '../assets/images/projects/technologies-logos/masstransit.png'
import OcelotPng from '../assets/images/projects/technologies-logos/ocelot.png'
import GrpcSvg from '../assets/images/projects/technologies-logos/grpc.svg'
import DockerSvg from '../assets/images/projects/technologies-logos/docker.svg'
import stylesLogo from '../styles/icon.module.scss'
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons'

export const projectsImages = {
    "curriculum_vitae": require("../assets/images/projects/curriculum-vitae.png"),
    "developing": require("../assets/images/projects/developing.svg"),
    "basic-crud-angular-node-js": require("../assets/images/projects/basic-crud-angular-node-js.png"),
    "microservices-architecture-dotnet-5": require("../assets/images/projects/microservices-architecture-dotnet-5.png"),
}

export const projectsLogosTechnologies = {
    "react": () => <img className={ stylesLogo.icon } src={ ReactSvg } alt="react-icon" />,
    "nextjs": () => <img className={ stylesLogo.icon } src={ NextJsSvg } alt="next-js-icon" />,
    "sass": () => <img className={ stylesLogo.icon } src={ SassSvg } alt="sass-icon" />,
    "ant-design": () => <img className={ stylesLogo.icon } src={ AntDesignSvg } alt="ant-design-icon" />,
    "angular": () => <img className={ stylesLogo.icon } src={ AngularSvg } alt="angular-icon" />,
    "material-ui": () => <img className={ stylesLogo.icon } src={ MaterialUiSvg } alt="material-ui-icon" />,
    "graphql": () => <img className={ stylesLogo.icon } src={ GraphQlSvg } alt="graphql-icon" />,
    "node-js": () => <img className={ stylesLogo.icon } src={ NodeJsSvg } alt="node-js-icon" />,
    "express": () => <img className={ stylesLogo.icon } src={ ExpressSvg } alt="express-icon" />,
    "mongo-db": () => <img className={ stylesLogo.icon } src={ MongoDbSvg } alt="mongo-db-icon" />,
    "dotnet5": () => <img className={ stylesLogo.icon } src={ Dotnet5Svg } alt="dotnet5-icon" />,
    "redis": () => <img className={ stylesLogo.icon } src={ RedisSvg } alt="redis-icon" />,
    "postgresql": () => <img className={ stylesLogo.icon } src={ PostgreSQLSvg } alt="postgresql-icon" />,
    "sql-server": () => <img className={ stylesLogo.icon } src={ SqlServerSvg } alt="sql-server-icon" />,
    "rabbitmq": () => <img className={ stylesLogo.icon } src={ RabbitMQSvg } alt="rabbitmq-icon" />,
    "masstransit": () => <img className={ stylesLogo.icon } src={ MassTransitPng } alt="masstransit-icon" />,
    "ocelot": () => <img className={ stylesLogo.icon } src={ OcelotPng } alt="ocelot-icon" />,
    "grpc": () => <img className={ stylesLogo.icon } src={ GrpcSvg } alt="grpc-icon" />,
    "docker": () => <img className={ stylesLogo.icon } src={ DockerSvg } alt="docker-icon" />
}

export const projectsLogosLinks = {
    "github": <GithubOutlined alt="github-icon" />,
    "url": <GlobalOutlined alt="url-icon" />
}