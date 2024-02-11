import { Navigation } from "./main/Navigation";
import { Hero } from "./main/Hero";
import { ComingSoonPage } from "./main/ComingSoonPage";
import { TechnicalEvents } from "./main/TechnicalEvents";
import { NonTechnicalEvents } from "./main/NonTechnicalEvents";
import { Others } from "./main/Others";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <ComingSoonPage />
      <TechnicalEvents />
      <NonTechnicalEvents />
      <Others />
    </>
  );
}

export default App;