import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {TouchableOpacity,Alert,ToastAndroid, Image, ImageBackground, StyleSheet, Text, TextInput,View } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import userActions from '../redux/actions/userActions'

const Create =(props)=>{

    const [paises, setPaises] = useState([])
    const [error, setError] = useState({})
    const [nuevoUser, setNuevoUser] = useState({
        nombre: '',
        apellido:'',
        email:'',
    })
    console.log(props)
    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(res=> setPaises(res.data))
    },[])
    const leerInput = (name, value)=>{
        setNuevoUser({...nuevoUser, [name]:value})
    }
    const validar = async () =>{
        const res = await props.newUser(nuevoUser)
        if (res && !res.success){
            const errorDetails = res.errores.details
            const errores = {
                nombre:null,apellido:null,email:null,password:null
            }
            errorDetails && errorDetails.map(error =>{
                errores[error.context.label] = error.message
                return false
            })
            setError(errores)
            ToastAndroid.show('Something went wrong!',
            ToastAndroid.SHORT)
        }
        else{
            props.navigation.navigate('Home')
            ToastAndroid.show('Create successful',
            ToastAndroid.SHORT)
        }
    }
    return(
        <ImageBackground source={require('../assets/fondoMovil.jpg')} style={styles.container}>
            <Image source={require('../assets/fuente.png')} style={styles.titulo}/>
            <TextInput
                placeholder='First name'
                onChangeText={(value) => leerInput('nombre',value)}
                style={styles.inputs}
                />
            <TextInput
                placeholder='Last name'
                onChangeText={(value) => leerInput('apellido',value)}
                style={styles.inputs}
                />
            <TextInput
                placeholder='Email'
                onChangeText={(value) => leerInput('email',value)}
                style={styles.inputs}
                />
            {/* <Picker 
                onChangeText={(value) => leerInput('country',value)}
                style={{color:'black', padding:10,width:'70%',marginBottom:'5%', borderRadius:8,backgroundColor:'#fafafa',}}>
                {paises.map(pais =>{
                    return <Picker.Item label={pais.name} value={pais.name} />
                })}
            </Picker> */}
            <TextInput
                placeholder='Password'
                secureTextEntry
                onChangeText={(value) => leerInput('password',value)}
                style={styles.inputs}
                />
            <TouchableOpacity onPress={validar}>
                <View style={styles.boton}>
                  <Text style={styles.texto}>Create</Text>
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
      newUser:userActions.newUser
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Create)