import ReactSvg from '../assets/images/projects/technologies-logos/react.svg'
import NextJsSvg from '../assets/images/projects/technologies-logos/nextjs.svg'
import SassSvg from '../assets/images/projects/technologies-logos/sass.svg'
import AntDesignSvg from '../assets/images/projects/technologies-logos/ant-design.svg'
import styleLogo from '../styles/icon.module.scss'

export const projectsImages = {
    "curriculum_vitae": require("../assets/images/projects/curriculum-vitae.jpg")
}

export const projectsLogosTechnologies = {
    "react": () => <img className={ styleLogo.icon } src={ ReactSvg } />,
    "nextjs": () => <img className={ styleLogo.icon } src={ NextJsSvg } />,
    "sass": () => <img className={ styleLogo.icon } src={ SassSvg } />,
    "ant-design": () => <img className={ styleLogo.icon } src={ AntDesignSvg } />
}