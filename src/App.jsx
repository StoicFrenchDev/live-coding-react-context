import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { DarkModeContext } from "./contexts/DarkModeProvider";

export default function App() {

  const {darkMode} = useContext(DarkModeContext);

  return (
    <>
    <Navbar />
    <div className={`app ${darkMode && 'dark-theme'}`}>
      <Content />
    </div>
    <Footer />
    </>
  )
}