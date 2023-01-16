import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import { Home } from './Pages/Home';
import Services from './Pages/Services';
import SingleBlog from './Pages/SingleBlog';
import GoToTop from './Components/GoToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-multipage-website">
        <GoToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route
            path="/blog/single-post/:title"
            element={<SingleBlog />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
