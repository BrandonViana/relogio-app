import "./App.css";
import DarkLight from "./components/DarkLight";
import DigitalClock from "./components/DigitalClock";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col transition-colors duration-300">
      <div className="text-4xl p-6">
        <DarkLight />
      </div>
      <div className="text-black font-bold text-6xl p-3 justify-center text-center dark:text-white transition-colors duration-300">
        <header className="justify-between">
          <span>Relógio Digital</span>
        </header>
      </div>
      <div className="flex-grow flex justify-center items-center text-black dark:text-white transition-colors duration-300">
        <DigitalClock />
      </div>
    </div>
  );
}

export default App;
