import React from 'react';
import Navbar from './component/navbar'
import {BrowserRouter , Route} from 'react-router-dom'
import Login from './component/screens/Login'
import Profile from './component/screens/Profile'
import SignUp from './component/screens/SignUp'
import Home from './component/screens/Home'
import CreatePost from './component/screens/createPost'
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    
     <Route exact  path='/'  component={Home}/>
     <Route  path='/login'   component={Login} />
     <Route  path='/SignUp' component={SignUp} />
     <Route  path='/profile' component={Profile} />
     <Route  path='/createpost' component={CreatePost} />
     
     
   </BrowserRouter>
  );
}

export default App;
