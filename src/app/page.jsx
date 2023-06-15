import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSaction from "@/components/HeroSaction";
import NFT from "@/components/NFT";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSaction/>
      <Features/>
      <NFT/>
      <Footer/>
    </main>
  )
}
