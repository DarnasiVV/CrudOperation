import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Edit from './Edit';


function Add() {
    const [names, setNames] = useState<Array<any>>([]);
    const [name, setName] = useState<any>('');

    const AddName = () => {
        setNames(prev => [...prev, name]);
        setName('');
    }

    const Input = ({ item }: any) => {
        const [isEdit, setIsEdit] = useState(false);
        const [value, setValue] = useState(item);
        const saveHanlder = () => {
            const index = names.indexOf(item);
            names[index] = value;
            setNames([...names])
        }
        return (<li>
            {isEdit ? <input value={value} onChange={(e) => { setValue(e.target.value) }} /> : <>{item}</>}
            {isEdit ?
                <button className='btn btn-primary ms-2 btn-sm' onClick={() => { saveHanlder() }}>Save</button> :
                <button className='btn btn-primary ms-2 btn-sm' onClick={() => setIsEdit(true)}>Edit</button>}
            <button className='btn btn-primary mx-2 btn-sm' onClick={() => {
                setNames(names.filter(ele => ele != item))
            }}>delete</button>
        </li>)
    }



    return (
        <>
            <Row className='mt-3'>
                <Col sm="4"><Form.Control value={name} onChange={(e) => setName(e.target.value)} /></Col>
                <Col sm="4"><Button onClick={() => { AddName() }}>Add Name</Button></Col>
            </Row>
            <Row className='mt-3'>
                <Col sm="4">
                    {
                        names.map(((item: string, index: number) => {
                            return (
                                <>
                                 {/* <Input item={item} setNames={setNames} names={names} /> */}
                                {item}
                                <Edit
                                names={names}
                                setNames={setNames}/>
                                </>
                            )
                        }))
                    }

                </Col>
            </Row>
        </>
    )
}

export default Add