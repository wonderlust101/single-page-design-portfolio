import logo from "/images/logo.svg";
import "./Banner.scss";
import Button from "../../../components/Button";

export default function Banner() {
    return (
        <div className='banner'>
            <img className='banner__logo' src={logo} alt="Logo"/>

            <Button variant="button--black">Free Consultation</Button>
        </div>
    );
}