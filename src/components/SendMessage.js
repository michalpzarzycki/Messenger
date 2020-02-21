import React from 'react'
import styles from './SendMessage.module.css'

function SendMessage() {

    return(
        <div className={styles.mainDiv}>
            <div className={styles.send}>
                <input type="text" name="message" className={styles.input}/>
                <button className={styles.button}>SEND!</button>
            </div>
        </div>
    )
}

export default SendMessage;