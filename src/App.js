import './App.css';
import Header from './component/header';
import HeaderBody from './component/header-body';
import CompleteSeachBar from './component/complete-search-bar';
import { Container } from '@mui/material';
import RestOfPage from './component/rest-of-page';
import Companies from './component/companies';
import DisplayEnteredData from './component/display-entered-data/displayEnteredData';

function App() {
  return (
    <>
      <div style={{backgroundColor:'#F5F5F5'}}>
        <Container sx={{height: '400px'}}>
          <Header/>
          <HeaderBody/>
          <CompleteSeachBar/>
          <Companies/>
        </Container>
      </div>
      <Container>
      <DisplayEnteredData/>
        <RestOfPage/>
      </Container>
    </>
  );
}

export default App;
