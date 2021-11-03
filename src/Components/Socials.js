import React from 'react'
import './static/Socials.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
// import Soundcloud from'./static/icon-soundcloud.png';

export default function Socials() {
    return (
        <div className='socials_container'>

            <div style={{paddingTop: '75px', paddingBottom: '15px'}}>
                <a href='https://www.youtube.com/channel/UCZjHzXVLZgN7FEkwrkoxnKg' target="_blank"> <YouTubeIcon className="sm_link" sx={{ fontSize: 40, color: 'red', marginRight: '1rem', marginLeft: '1rem' }}/> </a>
                <a href='https://www.facebook.com/therealmichaelsavage' target="_blank"> <FacebookIcon className="sm_link" sx={{ fontSize: 40, color: '#4267B2', marginRight: '1rem', marginLeft: '1rem' }}/> </a>
                <a href='https://soundcloud.com/michaelsavagemusic' target="_blank"> <CloudQueueIcon className="sm_link" sx={{ fontSize: 40, color: '#ff7700', marginRight: '1rem', marginLeft: '1rem' }}/> </a>
            </div>
                
            <div style={{fontSize: '14px', color: 'grey', paddingBottom: '75px'}}>
                Please like, follow, and share to support!
            </div>
                
        </div> 
            
    )
}
