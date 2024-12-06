import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import routeConfig from './config';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routeConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((child, childIndex) => (
              <Route key={childIndex} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
