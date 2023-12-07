import React from 'react'
import wallpaper from "../../assets/test.jpeg"
import './Home.css'
import SeeMore from '../../components/SeeMore/SeeMore'



const Home = () => {
      
  return (
    <> 
      <div class="parent_home">
        <div class="div1_home"> 
          <img className='img_hom' src={wallpaper}/> 
        </div>  
        <div class="div2_home">
         <SeeMore/>
        </div>
      </div>
    </>
  )
}

export default Home