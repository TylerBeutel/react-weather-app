import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/Searchbar';

const App = () => {
  return (
    <div>
      <Searchbar />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
