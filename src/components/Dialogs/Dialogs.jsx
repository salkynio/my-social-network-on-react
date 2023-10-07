import React from 'react';
import  s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewBodyMessageCreator} from "../../Redux/dialogs-reduce";



const Dialogs = (props) =>{
    let state= props.store.getState().dialogPage;
    const dialogsElements = state.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>);
    const messagesElements =state.messages.map(m => <Message text={m.message}/> )
    const newMessageBody = state.newMessageBody;

    const onSendMessageClick  = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const  onNewMessageChange= (e)=> {
        let body = e.target.value;
        props.store.dispatch(updateNewBodyMessageCreator(body))
    }
    return <div className={s.dialogs}>
       <div className={s.dialogsItems}>
           {dialogsElements}
       </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
                    <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter message'> </textarea>
                <div>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>

            </div>
        </div>

    </div>

}
export default Dialogs;