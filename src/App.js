// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Footer from "./components/Footer/Footer";
// import Hero from "./components/Hero/Hero";
// import Join from "./components/Join/Join";
// import Plans from "./components/Plans/Plans";
// import Programs from "./components/Programs/Programs";
// import Reasons from "./components/Reasons/Reasons";
// import Testimonais from "./components/Testimonais/Testimonais";
// function App() {
//   return (
    
//     <div className="App">
   
//       <Hero />
//       <Programs />
//       <Reasons />
//       <Plans />
//       <Testimonais />
//       <Join />
//       <Footer />
    
//     </div>
    
//   );
// }

// export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testimonais from "./components/Testimonais/Testimonais";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function MainApp() {
  return (
    <>
      <Hero />
      <Programs />
      <Reasons />
      <Footer />
      <Testimonais />
      <Join />
      <Plans />
    </>
  );
}

export default App;
