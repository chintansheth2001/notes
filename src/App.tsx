import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Note } from '../src/models/note.model'
import Header from './components/Header';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: 'Setup Meeting',
    text: "Meeting with Company",
    color: '#cccccc',
    date: (new Date).toString(),
  }])
  return (
    <>

      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
