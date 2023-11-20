import logo from './logo.svg';
import MyComponent from './MyComponent';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <h1>Hell-o react ..</h1>
    //   </header>
    // </div>
    <div className="App">
      <h1>Hell React</h1>
      <MyComponent data="PPTEST"/>
      <hr/>
      <br/>
      <p>HTML 적용하기</p>
    </div>
  );
}

export default App;
