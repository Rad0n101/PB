import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Dropdown, Form} from 'react-bootstrap'
import { Context } from '../../index'
import { createProduct, fetchCategories, fetchThemes } from '../../http/productAPI';
import { observer } from 'mobx-react-lite';

const CreateProduct = observer(({show, onHide}) =>{
    const {product} = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(() => {
      fetchCategories().then(data => product.setCategories(data))
      fetchThemes().then(data => product.setThemes(data))
  }, [])

    // const [theme, setTheme] = useState(null)
    // const [category, setCategory] = useState(null)

    const selectFile = e =>{
      setFile(e.target.files[0])
    }

    const addProduct = () => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('price', `${price}`)
      formData.append('img', file)
      formData.append('categoryId', product.selectedCategory.id)
      formData.append('themeId', product.selectedTheme.id)
      createProduct(formData).then(data => onHide(), alert('Товар добавлен'))
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
          Добавить товар
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className='mt-2'>
                <Dropdown.Toggle>{product.selectedCategory.name || 'Выберите категорию'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.categories.map(category =>
                        <Dropdown.Item onClick={() => product.setSelectedCategory(category)} key={category.id}>{category.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mt-2'>
                <Dropdown.Toggle>{product.selectedTheme.name || 'Выберите тему'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.themes.map(theme =>
                        <Dropdown.Item onClick={() => product.setSelectedTheme(theme)} key={theme.id}>{theme.name}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control className='mt-2' placeholder='Название товара' value={name} onChange={e => setName(e.target.value)}/>
            <Form.Control type='number' className='mt-2' placeholder='Стоимость' value={price} onChange={e => setPrice(Number(e.target.value))}/>
            <Form.Control onChange={selectFile} type='file' className='mt-2'/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>Закрыть</Button>
        <Button variant="success" onClick={addProduct}>Добавить</Button>
      </Modal.Footer>
    </Modal>
    )
})

export default CreateProduct