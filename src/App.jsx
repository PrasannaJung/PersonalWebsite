import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-tr from-primaryOne to-primaryTwo text-white p-4 font-openSans'>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
