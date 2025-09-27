import "./App.css";
import DigitalClock from "./components/DigitalClock";

function App() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <div className="text-black font-bold text-6xl p-3 justify-center text-center">
        <header>
          <span>Relógio</span>
        </header>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <DigitalClock />
      </div>
    </div>
  );
}

export default App;
