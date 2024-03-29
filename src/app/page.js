import Image from "next/image";
import { urbanist } from "./fonts";

// Components
import Header from "./components/global/header/header";
import FirstContentfulPaint from "./components/home/FirstContentfulPaint/FirstContentfulPaint";
import OpposingCards2 from "./components/home/OpposingCards2/OpposingCards2";
import ProjectsArea from "./components/home/ProjectsArea/ProjectsArea";
import ColaboratorsArea from "./components/home/ColaboratorsArea/ColaboratorsArea";
import VideoBanner from "./components/home/VideoBanner/VideoBanner";
import BlogArea from "./components/home/BlogArea/BlogArea";

export default function Home() {
  return (
    <main className={`${urbanist.className}`}>
        
        <Header />

        <FirstContentfulPaint />

        <OpposingCards2 />

        <ProjectsArea />

        {/* <Strip /> */}

        <ColaboratorsArea />


        {/* <VideoBanner /> */}

        <BlogArea />
    </main>
  );
}
