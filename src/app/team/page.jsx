import Header from "../components/global/header/header";
import Footer from "../components/home/Footer/Footer";
import HeroSection from "../components/team/FirstContentfulPaint/heroSection";
import { urbanist } from "../fonts";

export default function Team() {
    return (
        <main className={`${urbanist.className}`}>
            <Header />

            <HeroSection />


            <Footer />
        </main>
    )
}