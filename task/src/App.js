import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
//import Home from './pages';
import UserContainer from './pages/UserContainer';
import PostContainer from './pages/PostContainer';
import Formvalidation from './pages/Formvalidation';

function App() {
  return (
    <Provider store={store}>
      {/* {console.warn("store", {store})} */}
      <div>  
      <Router>
            <Navbar />
            <Routes>
                <Route exact path='/'  element={<Formvalidation />} />
                <Route path='/PostContainer' element={<PostContainer />} />
                <Route path='/Formvalidation' element={<Formvalidation />} />
                <Route path='/UserContainer' element={<UserContainer />} />
                
            </Routes>
        </Router>
        </div>
        </Provider>
  );
}

export default App;
