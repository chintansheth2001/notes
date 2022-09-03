import React, { useRef, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'
import { Note } from '../models/note.model'

interface ICreateNotesProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}


const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({ notes, setNotes }) => {
  const [error, setError] = useState<string>("");
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {

    e.preventDefault()
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError('All Fields are mandatory')
    }
    setError("");

    setNotes([...notes, {
      id: (new Date()).toString(),
      text: (textRef.current as HTMLTextAreaElement).value,
      title: (titleRef.current as HTMLInputElement).value,
      color: (colorRef.current as HTMLInputElement).value,
      date: (new Date()).toString()
    }]);

    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";

  }

  return (
    <>
      <h2>Create Notes</h2>

      {error && <Alert variant='danger'>{error}</Alert>}

      <Form className='my-3' onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder='Enter Title for the Note' ref={titleRef} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicText'>
          <Form.Label>Text</Form.Label>
          <Form.Control placeholder='Enter your Note' as="textarea" rows={3} ref={textRef} />
        </Form.Group>
        <Form.Group className='mb-3' >
          <Form.Label htmlFor="colorInput">Color</Form.Label>
          <Form.Control type="color" id="colorInput" defaultValue="#cccccc" title="Choose Your Color" ref={colorRef} />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </>
  )
};

export default CreateNotes;
