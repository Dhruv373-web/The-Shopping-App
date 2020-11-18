import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator
} from 'react-native';

import Chatroom from './Views/Chatroom';
import Chat from './Views/Chat';

class goals extends Component{
  render(){
    return(
        <Navigator
        initialRoute={{screen: 'Chatroom'}}
  renderScene={(route, nav) => {return this.renderScene(route.screen)}}
  />
)
  }

  renderScene(route,nav) {
switch (route.screen) {
  case 'Chatroom':
    return <Chatroom navigator={nav} />
  case 'Chat':
    return <Chat navigator={nav} />
      }
  }
}

AppRegistry.registerComponent('goals', () => goals);