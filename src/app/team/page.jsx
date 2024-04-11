'use client'
import { useEffect } from "react";
// Lenis
import Lenis from '@studio-freight/lenis'

import Header from "../components/global/header/header";
import Footer from "../components/home/Footer/Footer";
import StripCarrosel from "../components/home/StripCarrosel/StripCarrosel";
import HeroSection from "../components/team/FirstContentfulPaint/heroSection";
import GridTeam from "../components/team/GridTeam/GridTeam";
import { urbanist } from "../fonts";

export default function Team() {
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

            <HeroSection />

            <GridTeam />

            <StripCarrosel />

            <Footer />
        </main>
    )
}