import './App.css';
import { Footer } from './Components/Footer';
import { Products } from './Components/Products';
import { RoadMap } from './Components/RoadMap';
import { Tokens } from './Components/Tokens';
import { TopNavbar } from './Components/TopNavbar';

function App() {

  return (
    <div className="w-full">
      <TopNavbar />
      <Products />
      <RoadMap />
      <Tokens />
      <Footer />
    </div>
  );
}

export default App;
