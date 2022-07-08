import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ChatHelp.module.scss';
import { IMessage, sendMessage } from '../../store/headerReduser';
const ChatHelp = () => {
    const dispatch = useDispatch()
    const [text, changeMessage] = useState('Как дела?');
    const message: IMessage = {id: Date.now(), text: text};
    const messages: Array<IMessage> = useSelector((state: any) => state.header.helpMessages);
    
    return(
        <div className={styles.chat}>
            <h3 className={styles.head}>Чат-бот</h3>
            <ul className={styles.list}>
                {messages.map((messageItem) => {
                    return (
                        <li key={messageItem.id} className={styles.item}>
                            {messageItem.text}
                        </li>
                    )
                })}
            </ul>
            <div className={styles.input}>
                <input className={styles.message} 
                type="text" 
                placeholder='Введите сообщение'
                onChange={(e) => changeMessage(e.target.value)}/>
                <button className={styles.send}
                onClick={() => dispatch(sendMessage(message))}>Отправить</button>
            </div>
        </div>
    )
}

export default ChatHelp