import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Todos from './components/todos/Todos';

const App = () => {
   return (
      <div>
         <Container className="my-3">
            <Row>
               <Col>
                  <Todos />
               </Col>
            </Row>
         </Container>
      </div>
   );
};

export default App;
