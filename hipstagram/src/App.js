import React from "react";
import "./App.css";
import Header from "./Header/header";
import Navigation from "./Content/Navigation/navigation";
import News from "./Content/News/news";
import { Redirect, Route } from "react-router-dom";
import Music from "./Content/Music/music";
import Profile from "./Content/Profile/profile";
import Settings from "./Content/Settings/settings";
import MessagesContainer from "./Content/Messages/messagesContainer";
import UsersContainer from "./Content/Users/UsersContainer";

function App(props) {
    return (
        <div className="app-wrapper">
            <Header />

            <div className="content-block">
                <Navigation />

                <div className="app-wrapper-content">
                    <Redirect exact from="/" to="/profile" />
                    <Route
                        path="/profile"
                        render={() => <Profile />}
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
