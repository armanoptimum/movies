import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Header/index.jsx';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
