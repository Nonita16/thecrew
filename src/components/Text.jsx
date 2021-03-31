import React from 'react'
import { InputGroup, FormControl  } from 'react-bootstrap';

const TextArea = () => {
    return (
        <div className="conversation__textArea--message">
            <InputGroup className="mb-3">
                <FormControl
                placeholder="write a message"
                aria-label="message"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">send</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            
        </div>
    )
}

export default TextArea;