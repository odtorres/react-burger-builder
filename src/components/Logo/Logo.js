import React from 'react'
import image from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={image} alt="Logo"></img>
        </div>
    )
}


export default logo;