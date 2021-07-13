import React from 'react';
import './productShowcaseStyle.css'
const ProductShowcase = (props) => {
    const watchHours = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const watchMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    const watchSeconds = new Date().getSeconds() > 9 ? new Date().getSeconds() : '0' + new Date().getSeconds();
    return(
        <div className="watch_showcase">
            <img id="watch" src={props.currentImg} alt="smartwatch"></img>
            {props.showTime == '0'
            ?
            <p className="time">{`${watchHours}:${watchMinutes}:${watchSeconds}`}</p>
            :
            <div id="heart-rate">
                <img class="heart_img" src="https://static.vecteezy.com/system/resources/previews/001/187/510/original/heart-beat-png.png" alt="heart-beat"/>
                <p>78</p>
            </div>
            }
        </div>
    )
}

export default ProductShowcase;