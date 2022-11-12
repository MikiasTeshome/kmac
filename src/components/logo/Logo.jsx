import PropTypes from "prop-types";
import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo/logo.png'


const Logo = ({image}) => {
    return(
        <div className="header-logo">
            <Link to={process.env.PUBLIC_URL + "/"}>
                <img className="dark-logo" src={logo} alt="Agency Logo" />
            </Link>
        </div>
    )
}

Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
