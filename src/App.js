import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Design } from './pages/Design';
import { UpButton } from './components/UpButton';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div class="">
      <Header />

      <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Design} />
        <Route path="/design" element={<Design />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

      <UpButton />
      <Footer />
    </div>
  );
}

export default App;
