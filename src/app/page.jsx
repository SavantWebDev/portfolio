'use client'
import { urbanist } from "./fonts";
import { useEffect } from "react";

// Lenis
import Lenis from '@studio-freight/lenis'

// Components
import Header from "./components/global/header/header";
import FirstContentfulPaint from "./components/home/FirstContentfulPaint/FirstContentfulPaint";
import OpposingCards2 from "./components/home/OpposingCards2/OpposingCards2";
import ProjectsArea from "./components/home/ProjectsArea/ProjectsArea";
import ColaboratorsArea from "./components/home/ColaboratorsArea/ColaboratorsArea";
import StripCarrosel from "./components/home/StripCarrosel/StripCarrosel";
import Footer from "./components/home/Footer/Footer";

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  
  return (
    <main className={`${urbanist.className}`}>
        
        <Header />

        <FirstContentfulPaint />

        <OpposingCards2 />

        <ProjectsArea />

        <ColaboratorsArea />

        <StripCarrosel />

        <Footer />

    </main>
  );
}
