import React from 'react';
import  s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) =>{
    const newPostElement = React.createRef();
    const addPost = ()=> {
        let text = newPostElement.current.value;
        alert(text);
    }
    const dialogsElements = props.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>);
    const messagesElements =props.messages.map(m => <Message text={m.message}/> )

    return <div className={s.dialogs}>
       <div className={s.dialogsItems}>
           {dialogsElements}
       </div>
        <div className={s.messages}>
            {messagesElements}
            <div>
                    <textarea ref={newPostElement}> </textarea>
                <div>
                    <button onClick={addPost}>Add messages</button>
                </div>

            </div>
        </div>

    </div>

}
export default Dialogs;