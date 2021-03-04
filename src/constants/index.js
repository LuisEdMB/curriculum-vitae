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
    "react": () => <img className={ stylesLogo.icon } src={ ReactSvg } alt="react-icon" />,
    "nextjs": () => <img className={ stylesLogo.icon } src={ NextJsSvg } alt="next-js-icon" />,
    "sass": () => <img className={ stylesLogo.icon } src={ SassSvg } alt="sass-icon" />,
    "ant-design": () => <img className={ stylesLogo.icon } src={ AntDesignSvg } alt="ant-design-icon" />,
    "angular": () => <img className={ stylesLogo.icon } src={ Angular } alt="angular-icon" />,
    "material-ui": () => <img className={ stylesLogo.icon } src={ MaterialUi } alt="material-ui-icon" />,
    "graphql": () => <img className={ stylesLogo.icon } src={ GraphQl } alt="graphql-icon" />,
    "node-js": () => <img className={ stylesLogo.icon } src={ NodeJs } alt="node-js-icon" />,
    "express": () => <img className={ stylesLogo.icon } src={ Express } alt="express-icon" />,
    "mongo-db": () => <img className={ stylesLogo.icon } src={ MongoDb } alt="mongo-db-icon" />,
}

export const projectsLogosLinks = {
    "github": <GithubOutlined alt="github-icon" />,
    "url": <GlobalOutlined alt="url-icon" />
}