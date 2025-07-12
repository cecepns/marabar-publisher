import Header from './components/Header';
import Hero from './components/Hero';
import CompanyProfile from './components/CompanyProfile';
import Journals from './components/Journals';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CompanyProfile />
        <Journals />
        <VisionMission />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;