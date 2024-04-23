import { useContext } from "react"
import { DarkModeContext } from "../contexts/DarkModeProvider"

export default function ToggleButton() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  console.log(darkMode);
  return <button onClick={toggleDarkMode}>Toggle</button>
  }