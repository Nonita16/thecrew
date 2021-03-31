import React from 'react'

const Message = (props) => {
    const date = new Date(props.messageDateTime)

    let side = props.sentFrom === "revvup" ?  'right' : 'left'; 

    return (
        <>
        <div key={props.id}
             className={`conversation__message--${side}`}>
                <p>{props.text}</p>
        </div>
          <p className={`conversation__message--${side}`}>
            <span><small>{`${date.toLocaleTimeString()}`}</small>
            </span>
          </p>
        </>
    )
}

export default Message;
