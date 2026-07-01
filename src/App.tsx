import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Navigate, Outlet, useParams } from "react-router";
import { LANGS, MODES, type Lang, type Mode } from "./interfaces/i18n";
//import { CountriesProvider } from "./contexts/CountriesContext";





//FUNCTION APP
function App() {
  const { mode, lang } = useParams();

  if (!MODES.includes(mode as Mode) || !LANGS.includes(lang as Lang)) {
    return <Navigate to="/dev/en" replace />;
  }

  return (
    //<Provider  >
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>  
    //</Provider>
  );

}

export default App;
