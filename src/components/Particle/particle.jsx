import Particles from "react-particles-js";
import styles from '../../styles/particle.module.scss'

export default function Particle({ type, color, height }) {
    const types = {
        particles: "particles"
    }

    if (type === types.particles)
        return (
            <Particles
                className={ styles.particle }
                height={ height }
                params={{
                    "particles": {
                        "number": {
                            "value": 100
                        },
                        "size": {
                            "value": 3
                        },
                        "color": {
                            "value": `${ color }`
                        },
                        "links": {
                            "color": `${ color }`
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
        )
    return null
}