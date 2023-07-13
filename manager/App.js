import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./src/reducers";
import { initializeApp } from "firebase/app";
import Router from "./src/Router";

 const firebaseConfig = {
   apiKey: "AIzaSyDiebchZi7IpGyX4RXQT1zLBqNhnBznk0o",
   authDomain: "manager-5abc9.firebaseapp.com",
   projectId: "manager-5abc9",
   storageBucket: "manager-5abc9.appspot.com",
   messagingSenderId: "667430160249",
   appId: "1:667430160249:web:a120c2e9479caedbd011a8",
   measurementId: "G-MFEBHZ7CR8",
 };

const App = () => {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
  }, []);

  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(thunk))}>
      <Router />
    </Provider>
  );
};

export default App;



