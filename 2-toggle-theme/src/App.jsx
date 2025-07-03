import { useState } from "react";
import "./app.css";

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);



  const toggleTheme = () => {
    const changeThem=!isDarkTheme
    setDarkTheme(changeThem);
   document.body.className = changeThem ? "dark-theme" : "light-theme";
  };

  return (
    <section>
      <p>{isDarkTheme ? "dark" : "light"}</p>
      <br />
      <button onClick={toggleTheme}>Change Theme</button>
    </section>
  );
}

export default App;