import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/Hero";
import NavBar from "./sections/NAvBar";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
      <Jason />
    </main>
  );
};

export default App;
