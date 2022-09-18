import { Container } from "react-bootstrap";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
        <div className="w-100" style={{maxWidth: '400px'}}>

        <SignIn />
        </div>
      </Container>
      
    </div>
  );
}

export default App;
