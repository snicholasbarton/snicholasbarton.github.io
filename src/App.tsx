import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ThemeProvider } from './hooks/useTheme';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { AboutSite } from './pages/AboutSite';
import { Hobbies } from './pages/Hobbies';
import { AiStatement } from './pages/AiStatement';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/*" element={<Blog />} />
            <Route path="/about-site" element={<AboutSite />} />
            <Route path="/ai-statement" element={<AiStatement />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
