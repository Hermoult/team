import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MemberForm from './components/Members/MemberForm';
import Team from './components/TeamConfigForm';
import { Provider } from './context';
import Member from './components/Members/Member';

function App() {
  return (
    <Provider>
    <div className="container">
      <MemberForm/>
      <Member/>
    </div>
    </Provider>
  );
}
export default App;
