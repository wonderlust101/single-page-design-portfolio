import "./Home.scss";
import Banner from "./Banner/";
import Hero from "./Hero";
import UserProfile from "./UserProfile";
import BookCall from "./BookCall";
import Works from "./Works";

export default function Home() {
    return (
        <div className="home">

            <header className="grid-bleed">
                <Banner/>
            </header>

            <main className="home__content grid-bleed">
                <Hero/>
                <UserProfile/>
                <Works/>
                <BookCall/>
            </main>

            <footer className="grid-bleed">
                <Banner/>
            </footer>
        </div>
    );
}