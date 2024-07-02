import React from "react";
import Preloader from "../Preloader";
import Header from "../Header"
import Video from "../Video"
import Slides from "../Slides"
import Social from "../Social"

const HomePage = () => {
    return(
<div>       
    <Preloader/>
    <div id="video">
        <Video/>
    </div>
    <Header/>
    <Slides/>
    <Social/> 
</div>
    )
}

export default HomePage;