import Header from "@/components/Header";
import Somos from "@/components/Somos";
import Footer from "@/components/Footer";
import Metodologias from "@/components/Metodologias";
import Trabajemos from "@/components/Trabajemos";
import Asesoramientos from "@/components/Asesoramientos";
import Experiencia from "@/components/Experiencia";
function Home() {
  return (
    <>
      <Header />
      <Somos />
      <Experiencia />
      <Asesoramientos />
      <Metodologias />
      <Trabajemos />
      <Footer />
    </>
  );
}

export default Home;
