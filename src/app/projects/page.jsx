import { urbanist } from "../fonts";

// Components
import Header from "../components/global/header/header";
import StripCarrosel from "../components/home/StripCarrosel/StripCarrosel";
import Footer from "../components/home/Footer/Footer";
import AsideProjects from "../components/projects/asideProjects/AsideProjects";

export default function Projetos() {
    return (
      <main className={`${urbanist.className}`}>
          
          <Header />

          <AsideProjects />
  
          <StripCarrosel />
  
          <Footer />
  
      </main>
    );
  }