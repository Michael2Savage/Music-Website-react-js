import React, { useState } from 'react'
import './static/Audioplayer.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { StickyContainer, Sticky } from 'react-sticky'


export default function Audioplayer() {

    const [isOpen, setIsOpen] = useState(true);

    return (

        
        <div className='sticky_player'>
        
            <button className='togglearrowbutton' onClick={() => setIsOpen(!isOpen)}><ArrowUpwardIcon className={isOpen ? 'arrow_up' : 'arrow_down'}/></button>

            <div>
                <iframe className={isOpen ? 'iframe' : 'iframe_expanded'}  width="100%" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1339074523%3Fsecret_token%3Ds-3x3TCIMlnTO&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </ div>
            
        </div>

         
        
        
    )
}
