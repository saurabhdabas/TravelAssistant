import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="App">
      <Header 
        brand={"Travel Assistant"}
        username={"Saurabh"}
        email={"saurabhdabas7@gmail.com"} 
      />
      <Main/>
    </div>
  );
}

export default App;
