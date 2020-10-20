import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './context';
import MemberForm from './components/Members/MemberForm';
import Member from './components/Members/Member';
import TeamConfigForm from './components/Teams/TeamConfigForm';


function App() {
  return (
    <Provider>
    <div className="container">
      <MemberForm/>
      <Member/>
      <TeamConfigForm/>
    </div>
    </Provider>
  );
}
export default App;
