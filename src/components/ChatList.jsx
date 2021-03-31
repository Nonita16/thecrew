import { Tab, ListGroup, Row, Col, Button, Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Conversation from '../components/Conversation';
import { useSelector, useDispatch } from 'react-redux'
import {getChatList, getConversation, sortChatList} from '../actions/index';
import Message from '../components/Message';
import TextArea from '../components/Text'
import {Month, Weekday} from '../service'

const ChatList = () => {
   
    
    let messageDate;
    let currentDate = new Date();
    const chatList  =  useSelector(state => state.chatList) || [];
    const loading  =  useSelector(state => state.loading) || [];
    const conversation = useSelector(state => state.conversation) || [];
    const OwnerName = useSelector(state => state.OwnerName);
    const [flagOrder, setflagOrder] = useState(true);
    //const [Date, setDate] = useState();
    const dispatch = useDispatch();

     useEffect(() => {
         dispatch(getChatList())
         
     },[])


    const handleSort = () => {
        setflagOrder(!flagOrder)
        dispatch(sortChatList(flagOrder));
        
    }

    const compareDate = (date) => {
        if(currentDate.toLocaleDateString() !== date.toLocaleDateString()){
            currentDate = date;
            messageDate = `${Weekday[currentDate.getDay()]},
                            ${Month[currentDate.getMonth()]}
                            ${currentDate.getDate()}`
            return true;    
        }else{
            return false;
        }
       
    }

    if(!loading){
        return(
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }

    return (

        <>
        
        <Tab.Container id="list-group-tabs-example" >
            <Row>
                <Col sm={2} className="chatlist__container p-0" >
                    <div className="chatlist__header">
                      <h6 className="header_text">Your inbox</h6>
                      <Button type="button" variant="dark" onClick={handleSort}>Sort by day</Button>
                    </div>
                    <ListGroup>
                    {chatList.map( owner => (
                        <ListGroup.Item action 
                            variant="dark"
                            onClick={() => dispatch(
                                getConversation(owner.ownerId, 
                                `${owner.first_name}${owner.last_name}`))} 
                            
                            className="p-0"
                            key={owner.id}>
                            <Conversation {...owner}/>
                        </ListGroup.Item>
                    ))}
                    </ListGroup>
                </Col>
                <Col className="conversation__area">
                    <h1>{OwnerName}</h1>
                    <Tab.Content>
                    {conversation.map( message => (
                                    <>
                                    { compareDate(new Date(message.messageDateTime)) ? 
                                    <h5 className="conversation__date">
                                        {messageDate}
                                    </h5> : 
                                    null}
                                    <Message {...message} key={message.id}/>
                                    </>
                                ))} 
                    </Tab.Content>
                    <TextArea/>
                </Col>
            </Row>
        </Tab.Container>
        </>
    )
}

export default ChatList;