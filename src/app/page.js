import Image from "next/image";
import { urbanist } from "./fonts";

// Components
import Header from "./components/global/header/header";
import FirstContentfulPaint from "./components/home/FirstContentfulPaint/FirstContentfulPaint";
import OpposingCards from "./components/home/OpposingCards/OpposingCards";
import ProjectsArea from "./components/home/ProjectsArea/ProjectsArea";
import Strip from "./components/home/Strip/Strip";
import ColaboratorsArea from "./components/home/ColaboratorsArea/ColaboratorsArea";
import VideoBanner from "./components/home/VideoBanner/VideoBanner";

export default function Home() {
  return (
    <main className={`${urbanist.className}`}>
        
        <Header />

        <FirstContentfulPaint />

        <OpposingCards />

        <ProjectsArea />

        <Strip />

        <ColaboratorsArea />

        <VideoBanner />
    </main>
  );
}
