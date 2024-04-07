import Header from "../components/global/header/header";
import Footer from "../components/home/Footer/Footer";
import StripCarrosel from "../components/home/StripCarrosel/StripCarrosel";
import HeroSection from "../components/team/FirstContentfulPaint/heroSection";
import GridTeam from "../components/team/GridTeam/GridTeam";
import { urbanist } from "../fonts";

export default function Team() {
    return (
        <main className={`${urbanist.className}`}>
            <Header />

            <HeroSection />

            <GridTeam />

            <StripCarrosel />

            <Footer />
        </main>
    )
}