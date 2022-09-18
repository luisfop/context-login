import { Container } from "react-bootstrap";
import SignIn from "./components/SignIn/SignIn";
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './components/ProtectedLayout/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoutes/>}>
            <Route path="profile" element={<p>Profile Component</p>} />
            <Route path="xablau" element={<p>Xablau componente caraio!</p>} />
          </Route>

              <Route path="/signin" element={<SignIn />}>
          </Route>
        </Routes>
      </BrowserRouter>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
