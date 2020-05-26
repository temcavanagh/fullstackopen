import React from 'react' 

const Message = ({message, errorMsg}) => {
    if (errorMsg) {
        return <div className="msgCont error">{message}</div>
    } else {
        return <div className="msgCont">{message}</div>
    }
}

export default Message