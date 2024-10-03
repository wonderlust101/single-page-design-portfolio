import "./BookCall.scss";
import Button from "../../../components/Button";

export default function BookCall() {

    return (
        <section className="book-call">
            <div className='book-call__text'>
                <h2>Book a call with me</h2>
                <p>I’d love to have a chat to see how I can help you. The best first step is for us to discuss your
                    project
                    during a free consultation. Then we can move forward from there.</p>
            </div>
            <Button variant="button--orange">Free Consultation</Button>
        </section>
    );
}