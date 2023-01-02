import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
