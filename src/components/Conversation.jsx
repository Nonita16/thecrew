import React from 'react'
import Card from 'react-bootstrap/Card';


const Conversation = (props) => {


  const date = new Date(props.lastMessageDateTime)

  return (
    <Card
    bg="transparent"
    key={props.ownerId}
    text="white"
    >
      <Card.Header>
        {`${props.first_name} ${props.last_name}`}
        <span className="chatlist__card--date">
          {`${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`}
        </span>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {props.lastMessage}
        </Card.Text>
      </Card.Body>
  </Card>
  )
}

export default Conversation;
