import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {TouchableOpacity, Button, Image, ImageBackground, ImageComponent, StyleSheet, Text, TextInput, View, ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const City = (props)=>{

    const redirect = ()=>{
        if(props.loggedUser){
            props.navigation.navigate('Itineraries', props.city)
        }
        else{
            // ToastAndroid.show('You have to be logged in!',
            // ToastAndroid.TOP,25,
            // 50)
            props.navigation.navigate('Login')
        }
    }
    
    return(
        <TouchableOpacity onPress={redirect}>
            <ImageBackground source={{uri:props.city.cityPic}}  style={styles.containerCity} resizeMode='cover' >
                <Text style={styles.titulo}>{props.city.cityName}</Text>
            </ImageBackground>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    texto:{
        color:'blue'
    },
    containerCity:{
        width:'100%',
        height:200,
        justifyContent:'center',
        marginBottom:15,
    },
    titulo:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#fafafa',
        fontSize:30,
        backgroundColor:'rgba(9, 2, 70, 0.568)',
        paddingVertical:10
    }
    
})
const mapStateToProps = state =>{
    return{
        loggedUser:state.loggedUser
    }
  }
  
export default connect(mapStateToProps)(City)