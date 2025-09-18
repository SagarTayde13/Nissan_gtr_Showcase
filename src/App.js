import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Customizer from "./components/Customizer";
import CTA from "./components/CTA";
import Products from "./components/Products";
import NissanGTRWheels from "./components/NissanGTRWheels";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      <Hero />
      <Showcase />
      <Customizer />
      <Products />
      <NissanGTRWheels />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
