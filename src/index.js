import firebase from 'firebase'

import GithubLogin from './Github/GithubLogin'
import TwitterLogin from './Twitter/TwitterLogin'
import FacebookLogin from './Facebook/FacebookLogin'

function initializeApp(...params) {
  return firebase.initializeApp(...params)
}

export { GithubLogin, TwitterLogin, FacebookLogin, initializeApp }
