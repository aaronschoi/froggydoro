import { useEffect } from "react";
import { useCommands } from "./FroggyDoro/customhooks/useCommands";
import { useTimersInLocalStorage } from "./FroggyDoro/customhooks/useTimersInLocalStorage";
import FroggyDoro from "./FroggyDoro/FroggyDoro";
import { formatLS } from "./FroggyDoro/util/formatLS";
import Header from "./Header/Header";

function App() {
  const { setDefaults, resetBreak, resetWork } = useCommands();
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
      setDefaults(initialPresetDefaults);
      resetWork(initialPresetDefaults.workTime);
      resetBreak(initialPresetDefaults.breakTime);
    } else {
      setLocalStorage();
    }
  }, [setDefaults, setLocalStorage, resetWork, resetBreak]);

  return (
    <div className="App">
      <Header />
      <FroggyDoro />
    </div>
  );
}

export default App;
