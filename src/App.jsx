import React from 'react';
import Header from './components/Header';
import ShortcutList from './components/ShortcutList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <ShortcutList />
      <Footer />
    </div>
  );
};

export default App;
