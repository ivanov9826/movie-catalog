
import styles from './App.module.css'
import { Header } from './components/Header/Header';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Catalog } from './components/Catalog/Catalog';
import { Home } from './components/Home/Home';
import { Router } from './Router';
import { useState } from 'react';
import { UserContext } from './context/UserContext';
import { Footer } from './components/Footer/Footer';


function App() {

  const [user, setUser] = useState({
    username: '',
    id: ''
  })



  return (
    <UserContext.Provider value= {{user , setUser}}>
    <div className={styles.App}>
      <Header />
      <div>
        <Router />

      </div>
      <Footer />
    </div>
    </UserContext.Provider>
  );
}

export default App;
