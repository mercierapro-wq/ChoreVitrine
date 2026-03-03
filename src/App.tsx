import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Parcours from './components/Parcours';
import Bresil2025 from './components/Bresil2025';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-accent-ochre/20 selection:text-accent-ochre">
      <Navbar />
      <main>
        <Hero />
        <Presentation />
        <Parcours />
        <Bresil2025 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
