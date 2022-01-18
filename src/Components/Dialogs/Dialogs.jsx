import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    let MessagesElements = props.state.messages.map( m => <Message message={m.message} /> );

    let newMessageElement = React.createRef();

    let addMessage = () => {
      let text = newMessageElement.current.value;
      alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {MessagesElements}
            </div>
            <div className={s.textMessage}>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>sand message</button>
            </div>
        </div>
    )
}

export default Dialogs;