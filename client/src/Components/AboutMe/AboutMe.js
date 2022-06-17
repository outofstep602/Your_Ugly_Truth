import React from 'react';
import image1 from'../../assets/images/xray4.png'

const AboutMe =()=>{

    return(
<div>

    <div className="card" >
    <div className="card-body">
      <h3 className="card-title">Take Notes</h3>
      <p className="card-text">This blog was created to allow people to discuss how imperfect we are. In a world where acknowledging your flaws leaves you vulnerable to harassment and cyber bulling, we've created a safe environment to say otherwise. Please keep all mean spirited comments to yourself, or you will be asked to leave the platform.</p>
    </div>
    <img className="card-img-bottom" src={image1} alt="xray" id="image1" />
  </div>
</div>

    )
}
export default AboutMe
