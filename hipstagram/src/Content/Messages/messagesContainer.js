import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../Redux/messages-reducer";
import Messages from "./messages";
import "./messages.css";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: (body) => {
            dispatch(sendMessageCreator());
        },
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;