import React from 'react'

import { AiFillFacebook } from 'react-icons/ai'
import firebase from 'firebase'

import styles from './FacebookLogin.module.css'

export default function FacebookLogin({
  onSuccess,
  onFailure,
  scopes,
  style,
  className,
  theme = 'default'
}) {
  async function onClick() {
    const provider = new firebase.auth.FacebookAuthProvider()

    if (scopes) {
      provider.addScope(scopes)
    }

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
      className={`${styles.FacebookLogin} ${styles[theme]} ${className}`}
      onClick={onClick}
    >
      <AiFillFacebook className={styles.FacebookLoginIcon} />
      Connect with Facebook
    </div>
  )
}
