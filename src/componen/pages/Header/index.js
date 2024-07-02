import React from "react";

const Header = () => {
    return(
    <header id="header">
        <div className="container-fluid">
            <div className="navbar">
                <a href="#" id="logo" title="Elegance by TemplateMo">
                    portfolio
                </a>
                <div className="navigation-row">
                    <nav id="navigation">
                        <button type="button" className="navbar-toggle"> <i class="fa fa-bars"></i> </button>
                        <div className="nav-box navbar-collapse">
                            <ul className="navigation-menu nav navbar-nav navbars" id="nav">
                                <li data-menuanchor="slide01" className="active"><a href="#slide01">Home</a></li>
                                <li data-menuanchor="slide02"><a href="#slide02">About Me</a></li>
                                <li data-menuanchor="slide03"><a href="#slide03">Services</a></li>
                                <li data-menuanchor="slide04"><a href="#slide04">My Skills</a></li>
                                <li data-menuanchor="slide05"><a href="#slide05">My Work</a></li>
                                <li data-menuanchor="slide06"><a href="#slide06">Testimonials</a></li>
                                <li data-menuanchor="slide07"><a href="#slide07">Contact Me</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;