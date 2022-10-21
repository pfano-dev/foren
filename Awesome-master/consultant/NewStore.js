import React, { useState } from 'react';
import { StyleSheet,View, Text , Image, Button, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles'





  

export default function NewStore({navigation}){

    const [names,setNames] = React.useState('');
    const [storeName,setStoreName] = React.useState('');
    const [location,setLocation] = React.useState('');
    const [contant,setContant] = React.useState('');
 




    
    return(
        <ScrollView>
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

            <View style={styles.container}>
                <Text 
                    style={styles.label}>Case Number</Text>
                <TextInput
                    value={names}
                    placeholder='Case Number' onChangeText={(text) => setNames(text)}  style={styles.textBox} />
                <Text 
                    style={styles.label}>Case Name</Text>
                <TextInput
                    value={storeName}
                    placeholder='Case Name' onChangeText={(text) => setStoreName(text)}  style={styles.textBox} />

                <Text 
                    style={styles.label}>Location</Text>
                <TextInput
                    value={location}
                    placeholder='Location'  onChangeText={(text) => setLocation(text)} style={styles.textBox} />
              
                <Text 
                    
                    style={styles.label}>Date/Time</Text>
                <TextInput
                    value={contant}
                    placeholder='Date/Time' onChangeText={(text) => setContant(text)}  style={styles.textBox} />
                   
                    <TouchableOpacity style={{backgroundColor: 'green', borderRadius: 30, padding: 10, flexDirection: 'row', justifyContent:"space-between"}} 
                    onPress={() => navigation.navigate('AdditionalRQ',{names,storeName, location, contant})} >
                        <Text style={{color: 'white', padding: 10}}>
                            Next 
                        </Text>
                        <Ionicons name="md-arrow-forward" style={styles.icon} size={40} color={'#ccc'}/>
                    </TouchableOpacity>
        
            </View>
         
        </View>
        </ScrollView>
    );
}


const styless = StyleSheet.create({
    container: {
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

