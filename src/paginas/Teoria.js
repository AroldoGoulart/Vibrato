import React from 'react';
import { StyleSheet, Text, View,ImageBackground	 } from 'react-native';




export default class Teoria extends React.Component { 

	static navigationOptions = {
    title: 'Teoria Musical',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      zIndex: 1,
      fontSize: 30,
      justifyContent:  'center',
    },
  

  };

  render() {
    return (
      
      <View style={styles.container}>
          
          <ImageBackground source={require('../loren.jpg')} style={{width: '100%', height: '100%'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center'
  }
});
