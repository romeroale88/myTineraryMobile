
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import City from './City'
import { Button, Image, ImageBackground, ImageComponent, StyleSheet, Text, TextInput, View,TouchableOpacity, ScrollView} from 'react-native';


const Cities = (props)=>{
    const [cities, setCities] = useState([])

    useEffect(()=>{
        fetchCities()
    },[])
    const fetchCities = ()=>{
        axios.get('https://mytinerary-romero.herokuapp.com/api/cities')
        .then(respuesta=> setCities(respuesta.data.respuesta))
    }
    return(
        <ScrollView>
            <View style={styles.fondo}>
                <View style={{marginTop:20, width:'100%'}}>
                {cities.map(city=>{
                    return <City city={city} key={city._id} navigation={props.navigation} />
                    // return <Text>Hola</Text>
                })}
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    fondo:{
        backgroundColor:'#ece6f5',
        alignItems:'center',
        justifyContent:'center'
    },
    

})
export default Cities