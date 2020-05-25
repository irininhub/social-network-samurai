import React from 'react'
import {sendMessageCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../hoc/WithAuthRedirect";
import {compose} from "redux";


// const DialogsContainer = (props) => {
//
// let state = props.store.getState().dialogsPage;
//
//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     };
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//     return (
//         <Dialogs updateNewMessageBodyCreator ={onNewMessageChange}
//                  sendMessage = {onSendMessageClick}
//                  dialogsPage = {state}/>
//     )
// }

const mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            dispatch(sendMessageCreator(message))
        }
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs);