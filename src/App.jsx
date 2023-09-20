import Header from "./components/Header";
import MainContent from "./MainContent";
import { useState } from 'react'
import './sass/global.scss'
import FooterContent from './FooterContent'

function App() {
  return (
    <main>
      <MainContent />
      <FooterContent />
    </main>
  );

}

export default App;
