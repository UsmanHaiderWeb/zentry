import {createContext, memo, useRef, useState} from "react";
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

export const ContextAPITheme = createContext({
  isUserInteracted: false
})


function App() {
  const [themeRef, setTheme] = useState('dark');
  const [isUserInteracted, setUserInteraction] = useState(false);


  return (
    <ContextAPITheme.Provider value={{isUserInteracted, setUserInteraction}}>
      <main className={`relative min-h-screen w-full ${themeRef === 'dark' ? 'bg-black' : (themeRef === 'yellow' ? 'bg-[#EDFF66]' : 'bg-blue-75')}`}>
        <div className="overflow-hidden relative">
          <Header />
          <HeroSection />
          <PinImageSection />
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
        <ContactSection />
        <Footer />
      </main>
    </ContextAPITheme.Provider>
  );
}

export default memo(App);
