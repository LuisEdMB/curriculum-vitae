import Particles from "react-particles-js";
import styles from '../../styles/particle.module.scss'

export default function Particle({ type, color }) {
    const types = {
        particles: "particles"
    }

    if (type === types.particles)
        return (
            <Particles
                className={ styles.particle }
                params={{
                    "particles": {
                        "number": {
                            "value": 30
                        },
                        "size": {
                            "value": 6
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
                                "enable": false,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
        )
    return null
}