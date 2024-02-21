import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import HeaderBody from './component/header-body';
import CompleteSeachBar from './component/complete-search-bar';

function App() {
  return (
    <div>
      <Header/>
      <HeaderBody/>
      <CompleteSeachBar/>
    </div>
  );
}

export default App;
