import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItems/DialogsItems";
import Message from "./Messages/Messages";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    if (!props.isAuth) return <Redirect to='/login'/>;

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            <div>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    </div>
};

const maxLength = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate = {[required, maxLength]}
                       name ="newMessageBody"
                       placeholder='Enter your message'/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;