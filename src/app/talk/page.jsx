import Header from "../components/global/header/header";
import Footer from "../components/home/Footer/Footer";
import StripCarrosel from "../components/home/StripCarrosel/StripCarrosel";
import HeroSection from "../components/talk/HeroSection/heroSection";
import { urbanist } from "../fonts";

export default function Talk() {
    return (
        <main className={`${urbanist.className}`}>
            <Header />

            <HeroSection />

            <StripCarrosel />

            <Footer />
        </main>
    )
}