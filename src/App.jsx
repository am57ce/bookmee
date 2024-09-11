import "./App.css";
import "./index.css";
import hero from "../src/images/hero.png";
import { Navbar } from "../src/components/Navbar";
import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
// import { Footer } from "./components/Footer";
// import { LoginRegister } from "./components/LoginRegister";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div
          className="min-h-screen bg-cover bg-center relative"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <Hero />
        </div>
        <div className="flex justify-center items-center w-full px-[110px] gap-0 bg-[#011b73]">
          <Main />
        </div>
        {/* <Footer /> */}
        {/* <LoginRegister /> */}
      </div>

      {/*  */}
    </>
  );
}
export default App;
