'use client'
import { useEffect } from "react";
import { urbanist } from "../fonts";

// Lenis
import Lenis from '@studio-freight/lenis'

// Components
import Header from "../components/global/header/header";
import StripCarrosel from "../components/home/StripCarrosel/StripCarrosel";
import Footer from "../components/home/Footer/Footer";
import AsideProjects from "../components/projects/asideProjects/AsideProjects";

export default function Projetos() {
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

        <AsideProjects />

        <StripCarrosel />

        <Footer />

    </main>
  );
}