import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ paddingTop: '80px', minHeight: 'calc(100vh - 100px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
