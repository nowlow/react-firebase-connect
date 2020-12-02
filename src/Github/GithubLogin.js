import React from 'react'

import { AiFillGithub } from 'react-icons/ai'
import firebase from 'firebase'

import styles from './GithubLogin.module.css'

export default function GithubLogin({
  onSuccess,
  onFailure,
  scopes,
  style,
  className,
  theme = 'default'
}) {
  async function onClick() {
    const provider = new firebase.auth.GithubAuthProvider()

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
      className={`${styles.GithubLogin} ${styles[theme]} ${className}`}
      onClick={onClick}
    >
      <AiFillGithub className={styles.GithubLoginIcon} /> Connect with Github
    </div>
  )
}
