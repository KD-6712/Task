import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserContainer from './pages/UserContainer';
import PostContainer from './pages/PostContainer';
import FormValidation from './pages/FormValidation'

function App() {
  return (
    <Provider store={store}>
      <div>  
      <Router>
            <Navbar />
            <Routes>
                <Route exact path='/'  element={<FormValidation />} />
                <Route path='/PostContainer' element={<PostContainer />} />
                <Route path='/FormValidation' element={<FormValidation />} />
                <Route path='/UserContainer' element={<UserContainer />} />
            </Routes>
        </Router>
        </div>
        </Provider>
  );
}

export default App;
