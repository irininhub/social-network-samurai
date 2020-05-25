// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
//
//
//
// let store = {
//     _state: {
//
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, everybody', likes: 10},
//                 {id: 2, message: 'Who use this site?', likes: 17},
//                 {id: 3, message: 'Hello!!!', likes: 3}
//             ],
//             newPostText: 'Hello'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {name: "Dimych", id: 1},
//                 {name: "Andrey", id: 2},
//                 {name: "Marat", id: 3},
//                 {name: "Irina", id: 4},
//                 {name: "Victoria", id: 5}
//             ],
//             messages: [
//                 {message: "Hi!", id: 1},
//                 {message: "Hello, mallo!", id: 2},
//                 {message: "What's up!!", id: 3}
//             ],
//             newMessageBody: ''
//         }
//
//     },
//     _callSubscriber() {
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {   // {type: 'ADD-post'
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._callSubscriber(this._state);
//         if (action.type === ADD_POST) {
//             let newPost = {
//                 id: 4,
//                 message: this._state.profilePage.newPostText,
//                 likes: 0
//             };
//             this._state.profilePage.posts.push(newPost);
//             this._state.profilePage.newPostText = '';
//             this._callSubscriber(this._state);
//         } else if (action.type === UPDATE_NEW_POST_TEXT) {
//             this._state.profilePage.newPostText = action.newText;
//             this._callSubscriber(this._state);
//         }
//         else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//             this._state.dialogsPage.newMessageBody = action.body;
//             this._callSubscriber(this._state);
//         } else if (action.type === SEND_MESSAGE) {
//             let body = this._state.dialogsPage.newMessageBody;
//             this._state.dialogsPage.newMessageBody = '';
//             this._state.dialogsPage.messages.push({message: body, id: 4})
//             this._callSubscriber(this._state);
//         }
//     },
//
//
//     addPost() {
//         let newPost = {
//             id: 4,
//             message: this._state.profilePage.newPostText,
//             likes: 0
//         };
//         this._state.profilePage.posts.push(newPost);
//         this._state.profilePage.newPostText = '';
//         this._callSubscriber(this._state);
//     }
//
// };
//
//
//
// export default store;