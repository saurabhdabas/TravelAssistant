import './App.scss';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header 
        brand={"Travel Assistant"}
        username={"Saurabh"}
        email={"saurabhdabas7@gmail.com"} 
      />
    </div>
  );
}

export default App;
