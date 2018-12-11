import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, DrawerItems,createStackNavigator} from 'react-navigation';


import Principal from './Principal';
import Teoria from './Teoria';
import Instrumentos from './Instrumentos';
import Voz from './Voz';
import Generos from './Generos';

const menu = createStackNavigator({

  Home:{
    screen: Principal,
    
  },
  Teoria:{
    screen: Teoria
  },
  Instrumentos:{
    screen: Instrumentos
  },
  Voz:{
    screen: Voz
  },
  Generos:{
    screen: Generos
  },


});


const MyApp = createAppContainer(menu); 


export default class Navegadores extends React.Component {
  render() {
    return (
       
        <MyApp/>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});