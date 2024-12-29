// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './App.css';
// import Header from './components/Header';
// import Home from './components/Home';
// import Login from "./components/login";
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Login />}/>
//           <Route path= "/home" element={<Home />}/>
//           <Route path= "/home" element={<Header />}/>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from "./components/login";
import { getUserAuth } from './actions';
import { connect } from "react-redux";
function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
