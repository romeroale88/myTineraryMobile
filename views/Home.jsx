import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'
import { Button, Image, ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native';



const  Home =(props)=>{

  const logOut =()=>{
    props.logoutUser()
  }
    return(
          <ImageBackground source={require('../assets/fondoMovil.jpg')} style={styles.container}>
            {props.loggedUser && 
              <Text style={{fontWeight:'bold',fontSize:25,color:'#1c4573'}}>{`Hi, ${props.loggedUser.response.nombre}`}</Text>}
            <View style={{width:'100%',height:'35%',alignItems:'center'}}>
              <Image source={require('../assets/fuente.png')} style={styles.titulo}/>
              <Text style={{fontSize:30, color:'#1c4573', fontWeight:'bold'}}>Find your perfect trip!</Text>
            </View>
              <TouchableOpacity onPress={()=> props.navigation.navigate('Cities')}>
                <View style={styles.boton}>
                  <Text style={styles.texto}>Tap here!</Text>
                </View>
              </TouchableOpacity>
              {props.loggedUser ? 
                <TouchableOpacity onPress={logOut}>
                  <View style={styles.boton}>
                    <Text style={styles.texto}>LogOut</Text>
                  </View>
                </TouchableOpacity>                
                :
                <>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Create')}>
                  <View style={styles.boton}>
                    <Text style={styles.texto}>Register</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                <View style={styles.boton}>
                    <Text style={styles.texto}>Login</Text>
                  </View>
                </TouchableOpacity>
                </>
              }
              
          </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'cover'
  },
  titulo:{
      resizeMode:'contain',
      width:'70%',
      height:'50%',
  },
  boton:{
    width:150,
    backgroundColor:'#1c4573',
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    marginBottom:10,
  },
  texto:{
    fontSize:20,
    color:'#fafafa',
    fontWeight:'bold',
    padding:10,
  }
})

const mapStateToProps = state =>{
  return{
      loggedUser:state.loggedUser
  }
}
const mapDispatchToProps = {
  logoutUser:userActions.logoutUser
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)