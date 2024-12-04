import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/index.jsx';
import Footer from '../components/Footer/index.jsx';
import { config } from './config.jsx';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {config.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
