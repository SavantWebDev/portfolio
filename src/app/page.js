import Image from "next/image";
import { urbanist } from "./fonts";

// Components
import Header from "./components/global/header/header";
import FirstContentfulPaint from "./components/home/FirstContentfulPaint/FirstContentfulPaint";

export default function Home() {
  return (
    <main className={`${urbanist.className}`}>
        
        <Header />

        <FirstContentfulPaint />
    </main>
  );
}
