import { memo, useState} from "react";
import Header from "./components/Header";
import HeroSection from "./components/Sections/HeroSection";
import PinImageSection from "./components/Sections/PinImageSection";
import CardsSection from "./components/Sections/CardsSection";
import HiddenRealm from "./components/Sections/HiddenRealm";
import ZentPin from "./components/Sections/ZentPin";
import WhoWeAreSection from "./components/Sections/WhoWeAreSection";
import StickyContentSection from "./components/Sections/StickyContentSection";
import Footer from "./components/Sections/Footer";
import ContactSection from "./components/Sections/ContactSection";

function App() {
  const [themeRef, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);


  return (<>
    {loading &&
      <div className="w-full h-screen fixed top-0 left-0 z-50 bg-blue-75 flex justify-center items-center">
        <div className="animate-spin h-14 w-14 border-2 border-[#bababa] border-b-blue-700 rounded-full"></div>
      </div>
    }
    <main className={`relative w-full h-max ${themeRef === 'dark' ? 'bg-black' : (themeRef === 'yellow' ? 'bg-[#EDFF66]' : 'bg-blue-75')}`}>
      <div className='overflow-hidden relative bg-blue-75'>
        <Header />
        <HeroSection setLoading={setLoading} />
        <PinImageSection />
      </div>
      <div className={`overflow-hidden relative ${themeRef === 'dark' ? 'bg-black' : (themeRef === 'yellow' ? 'bg-[#EDFF66]' : 'bg-blue-75')}`}>
        <CardsSection />
        <HiddenRealm themeRef={themeRef} />
        <div className={`w-full min-h-screen ${themeRef === 'dark' ? 'bg-black' : (themeRef === 'yellow' ? 'bg-[#EDFF66]' : 'bg-blue-75')}`}>
          <ZentPin setTheme={setTheme} />
        </div>
        <div className={`w-full min-h-screen ${themeRef === 'yellow' ? 'bg-[#EDFF66]' : 'bg-blue-75'}`}>
          <WhoWeAreSection setTheme={setTheme} />
        </div>
      </div>
      <StickyContentSection setTheme={setTheme} />
      <div className="overflow-hidden relative w-full">
        <ContactSection />
        <Footer />
      </div>
    </main>
  </>);
}

export default memo(App);
