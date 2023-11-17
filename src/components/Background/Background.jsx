import React, { useCallback }  from 'react'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";
import ParticlesConfig from '../Config/Particles-config';
const Background = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <Particles id="tsparticles" init={particlesInit}  loaded={particlesLoaded} options={ParticlesConfig }></Particles>
  )
}

export default Background