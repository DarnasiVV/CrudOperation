
import { Form, Button, Row, Container, Col } from 'react-bootstrap';
import React, { useState } from 'react';



function StudentDetails() {
const [Hobbies,setHobbies]= useState<Array<string>>([]);
const [studentDetails,setStudentDetails]= useState<Array<object>>([{}]);
const  [studentDetail,setStudentDetail] = useState<Object>({
    studentName : "",
    Qualification : "",
    Age: "",
    Sex : "",
    City: "",
    Hobbies : []
});
const [enableFemale,setenableFemale]= useState<any>(false);
const [enablemale,setenablemale]= useState<any>(false);
const saveHobbiesHandler = (e:any) =>{
 let hobbie = e.target.value;
 setHobbies([...Hobbies,hobbie]);
setStudentDetail({...studentDetail,Hobbies:[...Hobbies,hobbie]})
}

const SaveGenderHandler = (e:any) =>{
let gender = e.target.value;
if (gender === "Female"){
    setenableFemale(true);
}
else{
    setenablemale(true);
}
}

const saveHandler = ()=>{
  console.log(studentDetail);
}

    return (
        <Container>
            <Row>
                <Col sm="3">
                    <Form.Label>Student Name</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Control
                        type='text'
                        onChange={(e) => {setStudentDetail({...studentDetail,studentName:e.target.value})}}
                    ></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm="3">
                    <Form.Label>Qualification</Form.Label>
                </Col>
                <Col sm="4">
                    <Form.Control
                        type='text'
                        onChange={(e) => {setStudentDetail({...studentDetail,Qualification:e.target.value})}}
                    >
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm='3'><Form.Label>Age</Form.Label></Col>
                <Col sm='4'>
                    <Form.Control 
                    type='number'
                    onChange={(e)=>{setStudentDetail({...studentDetail,Age:e.target.value})}}></Form.Control></Col>
            </Row>
            <Row>
                <Col sm="3"><Form.Label>Sex</Form.Label></Col>
                <Col sm='2'><Form.Check type='radio' value={'Female'} label='Female'  disabled={(enablemale === true)}   checked={(enableFemale)} onChange={(e)=>{SaveGenderHandler(e)}}/></Col>
                <Col sm='2'><Form.Check type='radio' value={'Male'} label='Male' checked={(enablemale)} disabled={(enableFemale === true)}   onChange={(e)=>{SaveGenderHandler(e)}} /></Col>
            </Row>
            <Row>
                <Col sm="3"><Form.Label>City</Form.Label></Col>
                <Col sm='2'><Form.Select onChange={(e:any)=>{ setStudentDetail({...studentDetail,City:e.target.value})}}>
                     <option value={'Hyderabad'} label='Hyderabad' />
                     <option value={'Banglore'} label='Banglore' />
                     <option value={'Mumbai'} label='Mumbai' />
                 </Form.Select>  </Col>
            </Row>
            <Row>
                <Col sm='3'><Form.Label>Hobbies</Form.Label></Col>
                <Col sm='2'><Form.Check value={'Playing Cricket'} type='checkbox' label='Playing Cricket' onChange={(e)=>{saveHobbiesHandler(e)}}></Form.Check></Col>
                <Col sm='2'><Form.Check value={'Cooking'} type='checkbox' label='Cooking' onChange={(e)=>{saveHobbiesHandler(e)}}></Form.Check></Col>
                <Col sm='2'><Form.Check value={'Listening Music'} type='checkbox' label='Listening Music' onChange={(e)=>{saveHobbiesHandler(e)}}></Form.Check></Col>
            </Row>
            <Row>
                <Col><Button onClick={()=>{saveHandler()}}>Submit</Button></Col>
            </Row>
            <Row>
               
              
            </Row>
        </Container>
    )
}

export default StudentDetails;