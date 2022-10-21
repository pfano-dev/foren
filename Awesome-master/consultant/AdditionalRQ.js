import { View, Image,ScrollView,  KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


export default function AdditionalRQ(){

    const route = useRoute();

    const prevData = route.params;

    console.log("............",prevData)
    console.log("this is data",prevData.contant);

    const contant = prevData.contant;
    const storeName = prevData.storeName;
    const location = prevData.location;
    const names =prevData.names;
    

   
    const navigation = useNavigation();

    function storeHighScore(
         question1,
         contant,
         storeName,
         location,
         names,
        
         ) {
        const db = getDatabase();
        const reference = ref(db, 'Stores/');
        push(reference, {
            Question1 : question1,
            Contant   : contant,
            StoreName : storeName,
            Location : location,
            names :  names,
            
          });
          navigation.navigate('Case',{  
            question1,
            contant,
            storeName,
            location,
            names,
           
          });
    }


    const [question1,setQuestion1] = React.useState('');
   

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styless.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       
        <View style={{flex: 1}}>
            <View style={styles.sectionHeader}>
                <Image style={styles.img} source={require('../assets/gootders_03.png')} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={styles.subText}>Hello, </Text>
                        <Text style={styles.text}> consultant</Text>
                    </View>

                </View>
            </View>
<ScrollView>
<View style={styless.inner}>
                <Text 
                    style={{fontWeight:'bold'}}>Add Text here </Text>
                <TextInput
                    value={question1}
                    placeholder='Type here...' onChangeText={(text) => setQuestion1(text)}  style={styless.textInput}
                    multiline={true}
                    maxLength={20000}
                    numberOfLines={1005}

                    />
               
              
                    <View>




 

                    <Button style={styles.button} onPress={() => storeHighScore(question1,contant, storeName,location,names,)} title='Submit'/>

                    </View>
                    </View>
                    </ScrollView>
            
        </View>

       
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
}







const styless = StyleSheet.create({
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: "space-around"
    },
    header: {
      fontSize: 36,
      marginBottom: 48
    },
    textInput: {
      height: 340,
      borderColor: "#000000",
      borderWidth: 1,
      marginBottom: 36,
      borderRadius:20,
      padding:10
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop: 12
    }
  });