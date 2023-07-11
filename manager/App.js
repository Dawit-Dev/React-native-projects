// import React, { Component } from "react";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import firebase from "firebase/app";
// import ReduxThunk from "redux-thunk";
// import "firebase/analytics";
// import reducers from "./src/reducers";
// import LoginForm from "./src/components/LoginForm";

// // Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDiebchZi7IpGyX4RXQT1zLBqNhnBznk0o",
//   authDomain: "manager-5abc9.firebaseapp.com",
//   projectId: "manager-5abc9",
//   storageBucket: "manager-5abc9.appspot.com",
//   messagingSenderId: "667430160249",
//   appId: "1:667430160249:web:a120c2e9479caedbd011a8",
//   measurementId: "G-MFEBHZ7CR8",
// };

// // Initialize Firebase
// // if (!firebase.apps.length) {
// //   firebase.initializeApp(firebaseConfig);
// // }
// // const analytics = firebase.analytics();

// class App extends Component {
//   render() {
//     return (
//       <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}> 
//         <LoginForm />
//       </Provider>
//     );
//   }
// }

// export default App;
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/reducers";
import LoginForm from "./src/components/LoginForm";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiebchZi7IpGyX4RXQT1zLBqNhnBznk0o",
  authDomain: "manager-5abc9.firebaseapp.com",
  projectId: "manager-5abc9",
  storageBucket: "manager-5abc9.appspot.com",
  messagingSenderId: "667430160249",
  appId: "1:667430160249:web:a120c2e9479caedbd011a8",
  measurementId: "G-MFEBHZ7CR8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(thunk))}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
