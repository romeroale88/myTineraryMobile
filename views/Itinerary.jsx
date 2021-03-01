import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {StyleSheetList,TouchableOpacity, Button, Image, ImageBackground, ImageComponent, StyleSheet, Text, TextInput, View,ScrollView } from 'react-native';


const Itinerary = (props)=>{
    
    return (    
                <View style={styles.containerItinerary}>
                    <Text style={styles.tituloItinerario}>{props.itinerary.itineraryTitle}</Text>
                    <Image style={styles.urlPic} source={{uri:'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'}}/>
                    <Text>{props.itinerary.UserName}</Text>
                    <View style={styles.info}>
                        <View style={styles.likes}>
                            <Image style={styles.like} source={require('../assets/corazon1.png')} />
                            <Text style={styles.infoTexto}>{props.itinerary.likes.length}</Text>
                        </View>
                        <Text style={styles.infoTexto}>{`Price: ${props.itinerary.price}`}</Text>
                        <Text style={styles.infoTexto}>{`Hours: ${props.itinerary.hours}`}</Text>
                    </View>
                    <View style={{flexDirection:'row', marginVertical:15}}>
                        {props.itinerary.hastags.map(hastag =>{
                            return <Text style={{color:'#fafafa', fontSize:12, fontWeight:'bold',marginRight:5}} key={hastag._id}>{hastag}</Text>
                        })}
                    </View>
                    <View style={{width:'90%',alignItems:'center'}}>
                        <Text style={{fontWeight:'bold', fontSize:20, color:'#fafafa'}}>Activities</Text>
                        <ScrollView 
                            horizontal={true}>
                        {props.itinerary.activities.length !==0 ?
                        props.itinerary.activities.map(activity =>{
                            return (
                                <View key={activity._id} style={{alignItems:'center',paddingVertical:15}}>
                                <Text style={{color:'#fafafa', fontSize:15,fontWeight:'bold',marginBottom:15}}>{activity.activityTitle}</Text>
                                <Image style={styles.imgActivity} source={{uri:activity.activityImage}} />
                                </View>
                                )
                            })
                        :
                        <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{marginVertical:15,fontSize:20,color:'#fafafa'}}>We don't have activities yet!</Text>
                        </View>
                        }
                        </ScrollView>
                    </View>
                </View>
    )
}

const styles = StyleSheet.create({
    containerItinerary:{
        marginVertical:30,
        backgroundColor:'#1c4573',
        width:'90%',
        alignItems:'center',
        borderRadius:10,
        justifyContent:'center',
        paddingVertical:10
    },
    tituloItinerario:{
        fontSize:25,
        fontWeight:'bold',
        color:'#fafafa',
        textAlign:'center',
        width:'70%'
    },
    urlPic:{
        width:50,
        height:50,
        marginTop:20
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'50%',
        marginVertical:8,
        textAlign:'center',
        fontWeight:'bold',  
    },
    infoTexto:{
        color:'#fafafa',
        fontWeight:'bold'
    },
    likes:{
        flexDirection:'row',
        alignItems:'center'
    },
    like:{
        width:20,
        height:20,
        resizeMode:'cover'
    },
    imgActivity:{
        width:250,
        height:250,
        marginHorizontal:20,
        resizeMode:'cover',
        borderRadius:10
    }
})
export default Itinerary