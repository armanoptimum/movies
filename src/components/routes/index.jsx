import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
