import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ThemeProvider } from "./hooks/useTheme";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { AboutSite } from "./pages/AboutSite";
import { AboutMe } from "./pages/AboutMe";
import { AiStatement } from "./pages/AiStatement";
import { Resume } from "./pages/Resume";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog/*" element={<Blog />} />
            <Route path="/about-site" element={<AboutSite />} />
            <Route path="/ai-statement" element={<AiStatement />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
