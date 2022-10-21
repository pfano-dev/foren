import React,{useState} from 'react';
import { View, Text , StyleSheet,Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { getDatabase, ref, onValue, push, serverTimestamp } from 'firebase/database';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons'; 



// navigator.geolocation = require('react-native-geolocation-service');

export default function Checkin({route: { params } }){

    const route = useRoute();

    const prevData = route.params;

 

console.log(".......data.................ff",prevData)
    const navigation = useNavigation();
    
    

    return(
        <View style={[styles.container,{marginTop:30}]}>
            <Image style={[styles.img,{marginTop:30}]} source={require('../assets/gootders_03.png')} />
          
            <Entypo name="suitcase" style={styles.icon} size={50} color="#ccc" />
            <Text style={{fontSize: 25, fontWeight: '700',padding:10, alignSelf:'center'}}>{prevData.item.item.StoreName}</Text>  
            <Text style={{fontSize: 18,padding:0, alignSelf:'center'}}>{prevData.item.item.names}</Text>           
            
            <Text style={styles.label}>Case Number</Text>
            <Text style={styles.textViewer}>{prevData.item.item.names}</Text>
            <Text style={styles.label}>Case Name</Text>
            <Text style={styles.textViewer}>{prevData.item.item.StoreName}</Text>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.textViewer}>{prevData.item.item.Location}</Text>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.textViewer}>{prevData.item.item.Contant}</Text>
            <Text style={styles.label}>Notes</Text>
            <Text style={styles.textViewer}>{prevData.item.item.Question1}</Text>

            {/* <Text style={styles.label}>{coodinate}</Text> */}

         
            
            <TouchableOpacity style={styles.btn} 
               onPress={() => navigation.navigate('Case')}       
          >
                <Text style={{color: 'white'}}>Go Back</Text>  
            </TouchableOpacity>      


        </View>
    );
}

function TrackCreate(location,useid,navigation) {
    const db = getDatabase();
    const reference = ref(db, 'Track/');
    push(reference, {
        CheckInTime: serverTimestamp(),
        LocationID: location,
        UserID:useid,
        CheckOutTime: ":",
        Duration: ":",
      });
      navigation.navigate('quiz', { id: location });
}

const styles = StyleSheet.create({
    container:{
        padding: 30,
        paddingTop:0,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        backgroundColor:'#F7F8FA',
        marginTop: 0,
    },
    label:{
        fontSize: 16,
        fontWeight: '700'
    },
    textViewer:{
        marginBottom: 20,
        fontSize: 16,
    },
    textBox:{
        backgroundColor: '#efefef',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    btn:{
        height: 50,
        marginTop: 30,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 30,
        alignSelf: 'stretch'
    },
    icon:{
        alignSelf: 'center',
    },

    img:{
        width: 200,
        height: 50,
    },
});


