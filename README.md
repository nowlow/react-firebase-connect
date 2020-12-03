# react-firebase-connect

Connect to OAuth2 application with React &amp; Firebase

[![NPM](https://img.shields.io/npm/v/react-firebase-connect.svg)](https://www.npmjs.com/package/react-firebase-connect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

via npm:

```bash
npm install --save react-firebase-connect
```

via yarn:

```bash
yarn add react-firebase-connect
```

## Usage

```jsx
import React, { Component } from 'react'

import { GithubLogin, initializeApp } from 'react-firebase-connect'
import 'react-firebase-connect/dist/index.css'

// Your firebase tokens
initializeApp({{
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
}})

class App extends Component {
  render() {
    return (
      <GithubLogin
        onSuccess={(result) => {
          console.log('success:', result)
        }}
        onFailure={(error) => {
          console.log('error:', error)
        }}
        scopes="repos"
        theme="dark"
      />
    )
  }
}
```

## General
### Props
**onSuccess**: function, Called when the connect succeed  
**onFailure**: function, Called when the connect failed  
**theme**: string, depends on the component it's in, default is "default"

## GithubLogin
**scopes**: string, see Github API documentation
### Themes
default:  
![default](.github/assets/github_default.png)  
dark:  
![dark](.github/assets/github_dark.png)

## FacebookLogin
**scopes**: string, see Github API documentation

## Themes
default:  
![default](.github/assets/facebook_default.png)  
blue:  
![blue](.github/assets/facebook_blue.png)

### Twitter
## Themes
default:  
![default](.github/assets/twitter_default.png)  
blue:  
![blue](.github/assets/twitter_blue.png)

## License

MIT © [nowlow](https://github.com/nowlow)
