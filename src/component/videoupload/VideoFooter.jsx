import React from 'react'

import logo from '../images/logo2.png'

function VideoFooter() {
    return (
        <div>
            <div className="video-footer">
                <img className="video-footer-logo" alt="footer" src={logo}></img>
                <h4 style={{ lineHeight: "5px" }}>QuickAsk © 2020.All Rights Reserved</h4>
            </div>
        </div>
    )
}

export default VideoFooter
