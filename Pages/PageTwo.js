/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Button,
  TextInput,
   Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class PageTwo extends Component {
  static navigationOptions  = {
    title: "Dashboard",
    style:{textAlign: 'center'}
};
  render() {
    return (
      <View style={{flex: 10, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor:'red', flexDirection: 'column'}}>
          <View style={{height:200, width:200, backgroundColor: 'blue', borderRadius: 100, flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center' }}>
          </View>
          
          <View style={{height:100, width:200, backgroundColor: 'green'}}>
              <Text style={{fontSize: 18, color: 'white'}}>User Name
              Company
              </Text>
          </View>
          <View style={{height:50, width:200, backgroundColor: 'green'}}>
              <TextInput style={{fontSize: 18, color: 'white'}} placeholder="Enter Mobile Number" keyboardType= 'numeric'/>
          </View>
          <View style={{height:80, width:200, backgroundColor: 'green'}}>
              <Button style={{fontSize: 18, color: 'white', borderRadius: 25}} title="register"/>
          </View>
      </View>
    );
  }
}

