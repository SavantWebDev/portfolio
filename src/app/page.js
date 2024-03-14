import Image from "next/image";
import { urbanist } from "./fonts";

// Components
import Header from "./components/global/header/header";

export default function Home() {
  return (
    <main className={`${urbanist.className}`}>
        
        <Header />
    </main>
  );
}
