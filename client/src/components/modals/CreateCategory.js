import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap'
import {createCategory} from '../../http/productAPI'

const CreateCategory = ({show, onHide}) =>{
  const [value, setValue] = useState('')

  const addCategory = () =>{
    createCategory({name: value}).then(data => {
      setValue('')
      onHide()
    })

  }


    return(
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить категорию
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder='Название категории'
            >
                
            </Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>Закрыть</Button>
        <Button variant="success" onClick={addCategory}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CreateCategory