import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
