import React from "react";
import MessageItem from "./DialogItem/dialogItem";
import Message from "./Message/message";
import "./messages.css";

const Messages = (props) => {

    let state = props.messagesPage;

    let dialog = state.dialogsData.map(d => <MessageItem name={d.name} key={d.id} id={d.id} />);
    let messages = state.messagesData.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className="message-wrapper">
            <div className="dialogs-items">
                {dialog}
            </div>

            <div className="messages">
                <div>
                    {messages}
                </div>
                <div>
                    <div><textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;