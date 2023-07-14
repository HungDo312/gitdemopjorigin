import React, { useEffect, useRef, useState } from 'react';


function randomColor(currentColor) {
    const COLOR_LIST = ['green', 'black', 'blue', 'yellow']

    const currentIndex = COLOR_LIST.indexOf(currentColor)
    let newIndex = currentIndex;
    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 3)
    }

    console.log(COLOR_LIST[newIndex])
    return COLOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent')

    useEffect(() => {
        const colorInteval = setInterval(() => {
            // console.log('First color:', color)
            console.log('Chance color:', colorRef.current)
            const newColor = randomColor(colorRef.current);
            setColor(newColor);

            colorRef.current = newColor;
        }, 1000)
        return () => {
            clearInterval(colorInteval)
        }
    }, [])


    return color;
}

export default useMagicColor;