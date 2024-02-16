import './App.css';
import Header from './component/header';
import HeaderBody from './component/header-body';
import CompleteSeachBar from './component/complete-search-bar';
import { Container } from '@mui/material';
import RestOfPage from './component/rest-of-page';

function App() {
  return (
    <>
      <div style={{backgroundColor:'#F5F5F5'}}>
        <Container >
          <Header/>
          <HeaderBody/>
          <CompleteSeachBar/>
        </Container>
      </div>
      <Container>
        <RestOfPage/>
      </Container>
    </>
  );
}

export default App;
