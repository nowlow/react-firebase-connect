import React from 'react'

import { AiOutlineTwitter } from 'react-icons/ai'
import firebase from 'firebase'

import styles from './TwitterLogin.module.css'

export default function TwitterLogin({
  onSuccess,
  onFailure,
  style,
  className,
  theme = 'default'
}) {
  async function onClick() {
    const provider = new firebase.auth.TwitterAuthProvider()

    try {
      const result = await firebase.auth().signInWithPopup(provider)

      onSuccess(result)
    } catch (error) {
      onFailure(error)
    }
  }

  return (
    <div
      style={style}
      className={`${styles.TwitterLogin} ${styles[theme]} ${className}`}
      onClick={onClick}
    >
      <AiOutlineTwitter className={styles.TwitterLoginIcon} />
      Connect with Twitter
    </div>
  )
}
