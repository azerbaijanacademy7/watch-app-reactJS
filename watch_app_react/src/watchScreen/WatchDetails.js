import React from 'react';
import './watchStyle.css';
import ProductShowcase from '../components/ProductShowcase';
export const Watch = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classUpdate = pos === props.currentPos ? 'radio_colors selected' : 'radio_colors';
        return(
            <button key={pos} id="color-btn2" className={`${classUpdate}`} onClick={() => props.onRadioClick(pos)}><img className="radio_image" src={item.imageUrl} alt={item.styleName}/></button>  
        )
    })

    const featureElements = props.data.featureList.map((item, pos) => {
        const classFeaturesUpdate = pos === props.showTime ? 'features_btn selected_btn' : 'features_btn';
        return(
            <button key={pos} className={`${classFeaturesUpdate}`} onClick={() => props.onFeatureBtnClick(pos)}>{item}</button>
        )
    })
    return(
        
        <div className="main_wrapper">
            <ProductShowcase currentImg={props.currentImage} showTime={props.showTime}/>
            <div className="text_wrapper">
                <h1>{props.data.title}</h1>
                <p className="watch_desc">{props.data.description}</p>
                <div>
                    <h4 className="radio_heading">Select Color</h4>
                    <div>
                        {colorOptions}
                        {/* <button id="color-btn1" className="radio_colors"><img className="radio_image selected" src="https://imgur.com/iOeUBV7.png" alt="watch radio image"/></button>
                        <button id="color-btn2" className="radio_colors"><img className="radio_image" src="https://imgur.com/PTgQlim.png" alt="watch radio image"/></button>
                        <button id="color-btn3" className="radio_colors"><img className="radio_image" src="https://imgur.com/Mplj1YR.png" alt="watch radio image"/></button>
                        <button id="color-btn4" className="radio_colors"><img className="radio_image" src="https://imgur.com/xSIK4M8.png" alt="watch radio image"/></button> */}
                    </div>
                    <div>
                        <h4 className="radio_heading">Features</h4>
                        {featureElements}
                    </div>
                    <div>
                        <button className="buy_btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch;