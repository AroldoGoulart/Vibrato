import React from 'react';
import { StyleSheet, Text, View, StatusBar,TouchableOpacity,Image} from 'react-native';
import {createAppContainer, DrawerItems,createStackNavigator} from 'react-navigation';


export default class Principal extends React.Component {
  static navigationOptions = {
    title: 'Vibrato',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      zIndex: 1,
      fontSize: 30,
      justifyContent:  'center',
      left: '280%'
    },
  

  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        
        <Text style={{fontSize: 40, marginTop: '-10%'}}> Home </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'  }}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Teoria')}>
            <Image style={styles.img} source={require('../Teoria.png')} />
           <Text style={{fontSize: 15, alignSelf: 'center'}}> Teoria Musical </Text>
          </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Instrumentos')}>
            <Image style={styles.img} source={require('../Instrumentos.png')} />  
            <Text style={{fontSize: 15, alignSelf: 'center'}}> Instrumetos </Text>
        </TouchableOpacity>

        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'  }}>
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Voz')}>
            <Image style={styles.img} source={require('../Voz.png')} />
            <Text style={{fontSize: 15, alignSelf: 'center'}}>  Voz & Canto </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Generos')}>
            <Image style={styles.img} source={require('../Generos.png')} />
            <Text style={{fontSize: 15, alignSelf: 'center'}}> Generos </Text>
        </TouchableOpacity>

        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
     
  },
  img:{
    width: 150,
    height: 160,
    margin: '5%'
  }

});