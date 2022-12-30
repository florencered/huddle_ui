import { Container } from './components/container.styled';
// import './App.css';
import Header from './components/Header'; 
//bringing in a theme using theme provider
import { ThemeProvider } from 'styled-components';  
//for providing colors to the whole body 
import GlobalStyles from './components/styles/Global'; 
import content from './content'; 
import Card from './components/Card'; 
import Footer from './components/Footer';
const theme={ 
  //different colors for all the pages
  colors: {
    header:"#ebfbff", 
    body:"#fff", 
    footer:"#003333",
  }, 
  mobile:'768px', 

  
}
function App() { 
  return ( 
   
    <ThemeProvider theme={theme}> 
      <> 
      <GlobalStyles/>
    <Header/>
   <Container>
    {content.map((item,index)=>(
      <Card key={index} item={item}></Card>
    ))}
   </Container>   
   <Footer/>
   </>
   </ThemeProvider>
   
  );
}

export default App;
