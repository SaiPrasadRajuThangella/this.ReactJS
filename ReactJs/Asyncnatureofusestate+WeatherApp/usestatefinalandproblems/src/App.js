// import logo from './logo.svg';
// import './App.css';

const users = ["aravind","rajesh","akhil","Nithish"]

function App() {
  return (<div className="App">
   {users.map((user,index) => <p key={index}>{user}</p>)}

  </div> )
}

export default App;
