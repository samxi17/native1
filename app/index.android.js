/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


export default class app extends Component {
  componentDidMount()
  {
    var op = 1.0;
  
    setInterval(function()
    {
          op -= 0.1;
          if (op <= 0)
            op = 1.0;
    
          this.heading.setNativeProps({style : {opacity : op}});
    }.bind(this), 100);

  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} ref={(com) => {
         
              this.heading = com;
              
          
        }}>
          Hehe
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('app', () => app);
