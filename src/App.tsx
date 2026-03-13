import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Parcours from './components/Parcours';
import Bresil2025 from './components/Bresil2025';
import DanseMusee from './components/DanseMusee';
import VideoCarousel from './components/VideoCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-accent-yellow/20 selection:text-accent-yellow">
      <Navbar />
      <main>
        <Hero />
        <Presentation />
        <Parcours />
        <Bresil2025 />
        <DanseMusee />
        <VideoCarousel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
