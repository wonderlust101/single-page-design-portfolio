import Button from "../../../components/Button";
import userImage from "/images/image-amy.webp";
import "./UserProfile.scss";

export default function UserProfile() {
    return (
        <section className="user-profile">
            <img src={userImage} alt="Amy similing and posing"/>

            <div className='user-profile__text'>
                <h2>I’m Amy, and I’d love to work on your next project</h2>
                <p className='user-profile__body-text'>I love working with others to create beautiful design solutions. I’ve designed everything from brand
                    illustrations to complete mobile apps. I’m also handy with a camera!</p>
                <Button variant="button--orange">Free Consultation</Button>
            </div>
        </section>
    );
}