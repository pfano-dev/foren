import 'react-native-gesture-handler';

import * as React from 'react';
import AuthStack from './Authentication/stack';
import { initializeApp } from "firebase/app";

function App() {
    const firebaseConfig = {
      apiKey: "AIzaSyAhGp6yXTWLwRDGukHVsL7XcQnaXH65yKo",
      authDomain: "forensic-dc53f.firebaseapp.com",
      projectId: "forensic-dc53f",
      storageBucket: "forensic-dc53f.appspot.com",
      messagingSenderId: "654014670779",
      appId: "1:654014670779:web:6c06a3530ccafb776fc69e"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  return (
    <AuthStack/>
  );
}

export default App;