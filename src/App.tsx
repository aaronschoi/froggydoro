import { useEffect } from "react";
import "./App.css";
import { useCommands } from "./FroggyDoro/customhooks/useCommands";
import { useTimersInLocalStorage } from "./FroggyDoro/customhooks/useTimersInLocalStorage";
import FroggyDoro from "./FroggyDoro/FroggyDoro";
import { formatLS } from "./FroggyDoro/util/formatLS";

function App() {

  const { setDefaults } = useCommands();
  const { setLocalStorage } = useTimersInLocalStorage();

  useEffect(() => {
    if (localStorage.getItem("timePresetsExist")) {
      const initialPresetDefaults = {
        workTime: {
          hours: formatLS(localStorage.getItem("workHours")),
          minutes: formatLS(localStorage.getItem("workMinutes")),
          seconds: formatLS(localStorage.getItem("workSeconds")),
        },
        breakTime: {
          hours: formatLS(localStorage.getItem("breakHours")),
          minutes: formatLS(localStorage.getItem("breakMinutes")),
          seconds: formatLS(localStorage.getItem("breakSeconds")),
        },
      };
      setDefaults(initialPresetDefaults)
    } else {
      setLocalStorage();
    }
  }, [setDefaults, setLocalStorage]);

  return (
    <div className="App">
      <FroggyDoro />
    </div>
  );
}

export default App;
