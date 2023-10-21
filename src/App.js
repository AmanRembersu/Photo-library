import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import PhotoLibrary from './PhotoLibrary';

function App() {
  return (
    <Container className="App mt-5">
      <h1 className="mb-4">Photo Library</h1>
      <div className="copyright">© 2023 Aman</div>
      <PhotoLibrary />
    </Container>
  );
}

export default App;
