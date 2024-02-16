import './App.css';
import Header from './component/header';
import HeaderBody from './component/header-body';
import CompleteSeachBar from './component/complete-search-bar';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
      <Header/>
      <HeaderBody/>
      <CompleteSeachBar/>
    </Container>
  );
}

export default App;
