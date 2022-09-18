import { Container } from "react-bootstrap";
import SignIn from "./components/SignIn/SignIn";
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedLayout from './components/ProtectedLayout/ProtectedLayout';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<ProtectedLayout><p>xablau</p></ProtectedLayout>}>
            <Route path="/profile" element={<p>Profile Component</p>} />
          </Route>

          <Route path="/signin" element={<SignIn />}>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
              <div className="w-100" style={{ maxWidth: '400px' }}>
              </div>
            </Container>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
