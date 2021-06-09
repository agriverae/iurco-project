import Header from "@/components/Header";
import Somos from "@/components/Somos";
import Footer from "@/components/Footer";
import Metodologias from "@/components/Metodologias";
import Trabajemos from "@/components/Trabajemos";
import Asesoramientos from "@/components/Asesoramientos";
import Experiencia from "@/components/Experiencia";
import Packs from "@/components/Packs";
function Home() {
  return (
    <>
      <Header />
      <Somos />
      <Experiencia />
      <Packs />
      <Asesoramientos />
      <Metodologias />
      <Trabajemos />
      <Footer />
    </>
  );
}

export default Home;
