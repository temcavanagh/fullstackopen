import React from 'react' 

const Message = ({message, errorMsg}) => {

    const messageStyle = {
        background: 'lightgrey',
        color: 'blue',
        fontStyle: 'bold',
        fontSize: 16,
    }

    if (errorMsg) {
        return <div style={messageStyle}>{message}</div>
    } else {
        return <div style={messageStyle}>{message}</div>
    }
}

export default Message