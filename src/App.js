import Signup from './components/SignUp/Signup';
import SignupDetail from "./components/SignUp/SignupDetail";
import Signin from "./components/Signin/Signin";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/Signin" component={Signin}></Route>
        <Route exact path="/Signup" component={Signup}></Route>
        <Route exact path="/SignupDetail" component={SignupDetail}></Route>
      </Router>
    </>
  );
}

export default App;
