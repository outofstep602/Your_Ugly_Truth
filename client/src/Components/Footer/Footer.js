import React from 'react'
import '../Footer/Footer.css'
import git from '../../assets/images/github.png'
import twit from '../../assets/images/twitter.png'
import linky from '../../assets/images/linked.png'
const Footer =()=>{


    return(
        <div>
<div className="d-flex p-3 bg-secondary text-white" id='footer'>
<p id='contact-info'>Contact Us @ takenotes.org</p>
  <img className="p-2" src={git} id ='gitty' alt='git hub logo'></img>
  <img className="p-2" src={twit} id='twitty' alt='twitter logo'></img>
  <img className="p-2" src={linky} id='linky'alt='linkdin logo'></img>
 
</div>

        </div>
    )
}
export default Footer