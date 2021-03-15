import "./../messages.css";
import { NavLink } from "react-router-dom";

const MessageItem = (props) => {
    let path = "/messages/" + props.id;
    return (
      <div className="dialog">
        <NavLink to={ path }> { props.name } </NavLink>
      </div>
    );
  };

  export default MessageItem;