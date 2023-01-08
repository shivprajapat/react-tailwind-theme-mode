import React from 'react';
import Header from './Header';

function App() {

  return (
    <div className="App">
      <Header />
      <section className='min-h-screen grid items-center pt-20 dark:text-gray-100 dark:bg-slate-900 duration-100'>
        <h2 className='text-4xl text-center font-bold'>Tailwind CSS with Create React App</h2>
      </section>
    </div>
  );
}

export default App;
