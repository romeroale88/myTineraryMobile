import React from 'react';
import { useState } from 'react';
import { TouchableOpacity,Alert, Button, Image, ImageBackground, ImageComponent, StyleSheet, Text, TextInput, View, ToastAndroid } from 'react-native';
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'

const Register =(props)=>{
  const [errores, setErrores] = useState([])
  const [login, setLogin] = useState({
    email:'',
    password:''
  })
  const leerInput = (name, value)=>{
    setLogin({...login, [name]:value})
  }
  const validar = async () =>{
    if(login.email ==='' || login.password ===''){
      ToastAndroid.show('All fields are required!',
      ToastAndroid.TOP,25,
      50)
      return false
      
    }
    setErrores([])
    const res = await props.loginUser(login)
    if(res && !res.success){
      setErrores([res.mensaje])
      
    ToastAndroid.show('The wrong username and / or password',
    ToastAndroid.TOP,25,
    50)
    }else{
      props.navigation.navigate('Home')
      ToastAndroid.show('Login successful',
      ToastAndroid.TOP,25,
      50)
    }
  }
    return(
        <ImageBackground source={require('../assets/fondoMovil.jpg')} style={styles.container}>
            <Image source={require('../assets/fuente.png')} style={styles.titulo}/>
            <TextInput
                placeholder='Email'
                onChangeText={(value) => leerInput('email',value)}
                style={styles.inputs}/>
            <TextInput
                placeholder='Password'
                secureTextEntry
                onChangeText={(value) => leerInput('password',value)}
                style={styles.inputs}/>
           <TouchableOpacity onPress={validar}>
                <View style={styles.boton}>
                  <Text style={styles.texto}>Login</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>props.navigation.navigate('Create')}>
                <View style={{backgroundColor:'#1c4573', borderRadius:10,marginTop:15}}>
                  <Text style={styles.texto}>You don't have an account? click here</Text>
                </View>
              </TouchableOpacity>
        </ImageBackground>

    )
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
        width:'50%',
        height:'30%'
  
    },
    inputs:{
        backgroundColor:'#fafafa',
        color:'black',
        width:'70%',
        marginBottom:'5%',
        padding:10,
        borderRadius:8
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
        fontSize:15,
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
  loginUser:userActions.loginUser
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)