import React from "react";
import "./App.css";
import Navigation from "./Content/Navigation/navigation";
import News from "./Content/News/news";
import { Redirect, Route } from "react-router-dom";
import Music from "./Content/Music/music";
import Settings from "./Content/Settings/settings";
import MessagesContainer from "./Content/Messages/messagesContainer";
import UsersContainer from "./Content/Users/UsersContainer";
import ProfileContainer from "./Content/Profile/ProfileInfo/profileContainer";
import HeaderContainer from "./Header/HeaderContainer";

function App(props) {
    return (
        <div className="app-wrapper">
            <HeaderContainer />

            <div className="content-block">
                <Navigation />

                <div className="app-wrapper-content">
                    <Redirect exact from="/" to="/profile" />
                    <Route
                        path="/profile/:userId?"
                        render={() => <ProfileContainer />} 
                    />
                    <Route
                        path="/messages"
                        render={() => <MessagesContainer />}
                    />
                    <Route
                        path="/users"
                        render={() => <UsersContainer /> }
                    />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        </div>
    );
}

export default App;
