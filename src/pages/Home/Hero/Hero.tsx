import graphicDesignVector from "/images/pattern-graphic-design.svg";
import uxUiVector from "/images/pattern-ui-ux.svg";
import appsVector from "/images/pattern-apps.svg";
import illustrationVector from "/images/pattern-illustrations.svg";
import photographyVector from "/images/pattern-photography.svg";
import motionGraphicsVector from "/images/pattern-motion-graphics.svg";

import "./Hero.scss";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__text">
                <h1>Design solutions made easy</h1>
                <p className="hero__body-text">With over ten years of experience in various design disciplines, I’m your
                    one-stop shop for your
                    design needs.</p>
            </div>

            <div className="hero__grid">
                <div className='hero__box hero__graphic-design'>
                    <img className='hero__box-graphic' src={graphicDesignVector} alt="" role="presentation"/>
                    <p className='hero__box-text'>Graphic Design</p>
                </div>

                <div className="hero__box hero__ux-ui">
                    <img className='hero__box-graphic' src={uxUiVector} alt="" role="presentation"/>
                    <p className='hero__box-text'>UI/UX</p>
                </div>

                <div className="hero__box hero__apps">
                    <img className='hero__box-graphic' src={appsVector} alt="" role="presentation"/>
                    <p className='hero__box-text'>Apps</p>
                </div>

                <div className="hero__box hero__illustration">
                    <img className='hero__box-graphic' src={illustrationVector} alt="" role="presentation"/>
                    <p className='hero__box-text'>Illustrations</p>
                </div>

                <div className="hero__box hero__photography">
                    <img className='hero__box-graphic' src={photographyVector} alt="" role="presentation"/>
                    <p className='hero__box-text'>Photography</p>
                </div>

                <div className='hero__box hero__motion-graphics'>
                    <img className='hero__box-graphic' src={motionGraphicsVector} alt="" role="presentation"/>
                    <p className='hero__box-text'>Motion Graphics</p>
                </div>
            </div>
        </section>
    );
}