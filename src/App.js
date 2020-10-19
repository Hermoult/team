import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Member from './components/Member';
import Team from './components/TeamConfigForm';
import { Provider } from './context';

function App() {
  return (
    <Provider>
    <div className="container">
      <Team/>
    </div>
    </Provider>
  );
}

export default App;
