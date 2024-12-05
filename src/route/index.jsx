import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/index.jsx';
import Footer from '../components/Footer/index.jsx';
import routeConfig from './config.jsx';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routeConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
