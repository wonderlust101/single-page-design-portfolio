import {useEffect, useRef, useState} from "react";

import Button from "../../../components/Button";

import testImage1 from "/images/image-slide-1.jpg";
import testImage2 from "/images/image-slide-2.jpg";
import testImage3 from "/images/image-slide-3.jpg";
import testImage4 from "/images/image-slide-4.jpg";
import testImage5 from "/images/image-slide-5.jpg";
import leftArrowIcon from "/images/icon-arrow-left.svg";
import rightArrowIcon from "/images/icon-arrow-right.svg";

import "./Works.scss";

export default function Works() {
    const images = [testImage1, testImage2, testImage3, testImage4, testImage5];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageWidth, setImageWidth] = useState(0);
    const sliderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        if (sliderRef.current) {
            const singleImage = sliderRef.current.querySelector(".works__slider-image") as HTMLImageElement;
            if (singleImage) {
                setImageWidth(singleImage.offsetWidth + 16);
            }
        }
    };

    const handleImageLoad = () => {
        handleResize();
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className="works">
            <h2>My Work</h2>

            <div className="works__slider" ref={sliderRef}>
                <div className="works__slider-wrapper"
                     style={{transform: `translateX(-${currentIndex * imageWidth}px)`}}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className="works__slider-image"
                            src={image}
                            alt={`Slide ${index}`}
                            role="presentation"
                            onLoad={handleImageLoad}
                        />
                    ))}
                </div>
            </div>

            <div className="works__buttons">
                <Button variant="button--black button--icon" onClick={handlePrev}>
                    <img src={leftArrowIcon} alt="Previous"/>
                </Button>

                <Button variant="button--black button--icon" onClick={handleNext}>
                    <img src={rightArrowIcon} alt="Next"/>
                </Button>
            </div>
        </section>
    );
}