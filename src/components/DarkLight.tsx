import { useEffect, useState } from "react";
import { GrSun, GrMoon } from "react-icons/gr";

function DarkLight() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer text-2xl transition-transform duration-200 hover:scale-110 dark:text-white"
      title="Alternar tema"
    >
      {theme === "light" ? <GrMoon /> : <GrSun />}
    </button>
  );
}

export default DarkLight;
