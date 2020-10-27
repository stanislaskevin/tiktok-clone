import React, {useState} from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import Messageicon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'

function VideoSidebar({likes, shares, messages}) {
    const [liked, setLiked] = useState(false)
    return (
        <div className="videoSidebar">
            <div className="videoSidebar_button">
                {liked ? (
                <FavoriteIcon fontSize="small"/>
                ) : (
                    <FavoriteBorderIcon fontSize="small" onClick={(e) => setLiked(true)}/>
                )} 
                <p>{liked ? likes + 1 : likes}</p>
            </div> 
            <div className="videoSidebar_button">
                <Messageicon fontSize="small"/>
                <p>{messages}</p>
            </div>
            <div className="videoSidebar_button">
                <ShareIcon fontSize="small"/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
