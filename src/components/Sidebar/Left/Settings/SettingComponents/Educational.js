import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
import "../../../../CSS/userSettings/settings.css"
function Educational() {
    return (
        <div className="container">
        <div className="EducationalMainBody">
            <Form >
                <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalText">
                <Form.Label column sm={1}>
                    <p className="settingPersonalText">Degree</p>
                </Form.Label>
                <Col sm={8} className="settingPersonalInputField">
                    <Form.Control className="border-warning dark" type="text" placeholder="BSc" />
                </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalText">
                <Form.Label column sm={1}>
                    <p className="settingPersonalText">Institute</p>
                </Form.Label>
                <Col sm={8} className="settingPersonalInputField">
                    <Form.Control className="border-warning dark" type="text" placeholder="Daffodil International University"/>
                </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-1 p-3" controlId="formHorizontalText">
                <Form.Label column sm={1} className="settingPersonaledit form-label">
                    <p className="settingPersonalText">Subject</p>
                </Form.Label>
                <Col sm={8} className="settingPersonalInputField">
                    <Form.Control className="border-warning dark" type="text" placeholder="CSE" />
                </Col>
                </Form.Group>

                <Button variant="outline-warning"  style={{width: "300px", marginLeft: "70px", marginTop: "40px"}} className="educationalButtonSave"> ➕ Add Another</Button>
            </Form>


           <div className="flex-row">
                <input type="password" className="PasswordField border-warning" />
                <Button variant="outline-warning"  style={{width: "200px", marginLeft: "10px"}} className="educationalButtonSave">Save</Button>
           </div>
           
        </div>
        
        
        </div>
    )
}

export default Educational;
