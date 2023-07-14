import React, { useState } from 'react';
import "./style.scss"
ColorBox.propTypes = {

};
function getRandomColor() {
    const COLO_LIST = ['deepink', 'green', 'yellow', 'black', 'blue']
    const randomIndex = Math.trunc(Math.random() * 5)
    return COLO_LIST[randomIndex];
}

function ColorBox() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem(('box_color') || 'deeppink')
        console.log(initColor)
        return initColor;
    })
    function handleBoxClick() {
        // get random color
        const newColor = getRandomColor();
        setColor(newColor)

        localStorage.setItem('box_color', newColor)
    }

    return (
        <div className='color-box'
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}>
    
        </div>
    );
}

export default ColorBox;