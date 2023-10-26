import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import routes from './route.config';
import Menu from './utils/Menu';
import validationConfig from './validations';

validationConfig();

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className='container'>
          <Routes>
            {routes.map(route => <Route key={route.path} path={route.path} element={<route.element />} />)}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
