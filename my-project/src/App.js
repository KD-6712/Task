import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Address from './components/pages/Address/Address'
import Form from './components/pages/Form/Form'
import ErrorBoundary from './utils/ErrorBoundary';
import Users from './components/user/Users'
import Loader from './components/common/Loader';
import store from './redux/store';
import { Provider } from 'react-redux';
import Snackbars from './components/common/SnackBar/Snackbar';
function App() {
  return (
       <ErrorBoundary>
        {/* <Provider store={store}> */}
     
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/Home">AGE Home</Link>
                </li>
                <li>
                  <Link to="/About">NAME About</Link>
                </li>
                <li>
                  <Link to="/Address">ADDRESS</Link>
                </li>
                <li>
                  <Link to="/Form">Form</Link>
                </li>
              </ul>
            </nav>
            <hr />
            <Routes>
              <Route path="/about" element={<About />} />
              <Route exact path="/Home" element={<Home />} />
              <Route path="/address" element={<Address />} />
              <Route path="/form" element={<Form />}/>
              <Route path="/users" element={<Users />}/>
            </Routes>
          </div>
        </Router>
        <Loader />
        {/* <div>
          <Users />
        </div> */}
       

      </div>
      {/* </Provider> */}
    </ErrorBoundary>

   
   
  );
}

export default App;
