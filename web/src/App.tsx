import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/components";
import { Product } from '@/pages';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<h1>404 - Page not found</h1>} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
