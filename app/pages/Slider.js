import React from 'react';
import Image from 'next/image';
import slider from '../assets/images/slide.jpg';
const Slider = () => {
    return (
        <div className="sliderimage">
        <Image src={slider} alt={slider} ></Image>
        </div>
    );
};
export default Slider;
