import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {TouchableOpacity, Button, Image, ImageBackground, ImageComponent, StyleSheet, Text, TextInput, View,ScrollView, ViewBase } from 'react-native';
import Itinerary from './Itinerary'
import { color } from 'react-native-reanimated';

const Itineraries = (props)=>{
    console.log(props)
    const id=props.route.params._id
    const [itineraries, setItineraries] = useState([])

    useEffect(()=>{
        fetchItineraries()
    },[])
    const fetchItineraries = ()=>{
        axios.get(`https://mytinerary-romero.herokuapp.com/api/itineraries/${id}`)
        .then(respuesta => setItineraries(respuesta.data.itineraries))
    }
    return(
        <View style={styles.fondo}>
            <ScrollView>
                <ImageBackground source={{uri:props.route.params.cityPic}} style={styles.fondoImg} >
                    <Text style={styles.textoFondo}>{props.route.params.cityName}</Text>
                </ImageBackground>
            {itineraries.length!==0 ?
            itineraries.map(itinerary=>{
                return (
                    <View style={{width:'100%',justifyContent:'center',alignItems:'center'}} key={itinerary._id}>
                        <Itinerary  itinerary={itinerary} />
                    </View>
                    )
            })
            :
            <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                <View style={styles.conteinerTexto}>
                <Text style={styles.texto}>We don't have itineraries yet!</Text>
                </View>
            </View>
            }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor:'#ece6f5',
        alignContent:'center',
        justifyContent:'center'
        
    },
    conteinerTexto:{
        width:'80%',
        paddingHorizontal:10,
        height:200,
        backgroundColor:'#1c4573',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginTop:'20%'
    }, 
    texto:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#fafafa'
    },
    fondoImg:{
        width:'100%',
        height:300,
        resizeMode:'cover',
        justifyContent:'center'
    },
    textoFondo:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#fafafa',
        fontSize:30,
        backgroundColor:'rgba(9, 2, 70, 0.568)',
        paddingVertical:10
    }
})

export default Itineraries