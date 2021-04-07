import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Messages from '../Content/Messages/messages';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.profilePage.isAuth
})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) {
                return <Redirect to={"/login"} />
            }
            return(
                <Messages {...this.props} />
            )
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(withAuthRedirect);

    return ConnectedAuthRedirectComponent;
}