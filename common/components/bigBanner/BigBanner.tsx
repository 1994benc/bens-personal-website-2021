import React, { ReactElement } from 'react'
import styles from './BigBanner.module.css'

interface Props {
    text: string;
    invertStyles: boolean;
    id: string;
}

export default function BigBanner({text, invertStyles, id}: Props): ReactElement {
    return (
        <div id={id} className={invertStyles ? styles.inverted + ' ' + styles.BigBanner :  styles.BigBanner}>
            <div className={styles.content}>{text}</div>
        </div>
    )
}
