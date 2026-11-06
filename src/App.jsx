import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Suites from "./components/Suites";
import Experiences from "./components/Experiences";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Suites />
        <Experiences />
        <Gallery />
        <Reservation />
      </main>
    </>
  );
}

export default App;