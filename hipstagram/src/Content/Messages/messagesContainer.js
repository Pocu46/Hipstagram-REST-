import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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
        updateNewMessageBody: () => {
            dispatch(updateNewMessageBodyCreator());
        },
        sendMessage: (body) => {
            dispatch(sendMessageCreator(body));
        },
    }
}

let AuthRedirectComponent = withAuthRedirect(Messages);


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MessagesContainer;