import messagesReducer from "./messages-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            post: [
                { id: 1, message: "Hi, how are you?", likesCount: 12 },
                { id: 2, message: "My first post", likesCount: 9 },
                { id: 2, message: "Bla Bla Bla", likesCount: 3 },
                { id: 2, message: "Say you'll haunt me", likesCount: 46 },
            ],
            newPostText: "front end",
        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: "Oleh" },
                { id: 2, name: "Victor" },
                { id: 3, name: "Maria" },
                { id: 4, name: "Valeriy" },
                { id: 5, name: "John" },
            ],
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How is your project?" },
                { id: 3, message: "Looks not ok" },
            ],
            newMessageBody: ""
        },
        navbar: {}
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.navbar = navbarReducer(this._state.navbar, action)

        this._callSubscriber(this._state);
    }
};

export default store;
