import ReactSvg from '../assets/images/projects/technologies-logos/react.svg'
import NextJsSvg from '../assets/images/projects/technologies-logos/nextjs.svg'
import SassSvg from '../assets/images/projects/technologies-logos/sass.svg'
import AntDesignSvg from '../assets/images/projects/technologies-logos/ant-design.svg'
import Angular from '../assets/images/projects/technologies-logos/angular.svg'
import MaterialUi from '../assets/images/projects/technologies-logos/material-ui.svg'
import GraphQl from '../assets/images/projects/technologies-logos/graphql.svg'
import NodeJs from '../assets/images/projects/technologies-logos/node-js.svg'
import Express from '../assets/images/projects/technologies-logos/express.svg'
import MongoDb from '../assets/images/projects/technologies-logos/mongo-db.svg'
import stylesLogo from '../styles/icon.module.scss'
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons'

export const projectsImages = {
    "curriculum_vitae": require("../assets/images/projects/curriculum-vitae.png"),
    "developing": require("../assets/images/projects/developing.svg")
}

export const projectsLogosTechnologies = {
    "react": () => <img className={ stylesLogo.icon } src={ ReactSvg } />,
    "nextjs": () => <img className={ stylesLogo.icon } src={ NextJsSvg } />,
    "sass": () => <img className={ stylesLogo.icon } src={ SassSvg } />,
    "ant-design": () => <img className={ stylesLogo.icon } src={ AntDesignSvg } />,
    "angular": () => <img className={ stylesLogo.icon } src={ Angular } />,
    "material-ui": () => <img className={ stylesLogo.icon } src={ MaterialUi } />,
    "graphql": () => <img className={ stylesLogo.icon } src={ GraphQl } />,
    "node-js": () => <img className={ stylesLogo.icon } src={ NodeJs } />,
    "express": () => <img className={ stylesLogo.icon } src={ Express } />,
    "mongo-db": () => <img className={ stylesLogo.icon } src={ MongoDb } />,
}

export const projectsLogosLinks = {
    "github": <GithubOutlined />,
    "url": <GlobalOutlined />
}