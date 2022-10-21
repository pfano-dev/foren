import React,{useState, useEffect} from 'react';
import {StyleSheet, View, Text , SectionList, Image, Pressable,  RefreshControl, } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import { useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 



const News = ({navigation}) => {

    const route = useRoute();

    const prevData = route.params;
  
  
  
    const signOuto = () => {
      navigation.replace('Login')
        };
  
    // console.log(prevData)
    // console.log("..........................................this is data....",prevData);
  
    var data = [];
    var sec = [];
  
    const [refreshing, setRefreshing] = useState(false);
    
  
  const onRefresh = async () => {
    setRefreshing(true);
    await   sec.push({title: '',data})
    setRefreshing(false);
  };
  
   
  
  
  
  
  
  
  
  
    useEffect(() => {
      sec.push({title: '',data})
    }, []);
    
  
   
  
  //   useEffect(() => {
   
      const db = getDatabase();
      // Retrieve new posts as they are added to our database
        const dbRef = ref(db, 'Stores/');
       
          while(sec.length == 0){
              onValue(dbRef, (snapshot) => {
                  snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();
                    data.push({key: childKey, item: childData})
                  });
                });
                sec.push({title: '',data})
               
          }
        
        
      
const last = data[data.length - 1]
console.log("gggggggggggggggggggggggggghhhhhhhhhhhhhhhh",data[data.length - 1])
  return (
    <View style={{paddingTop:5}}>
           
<View style={styles.sectionHeader}>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={styles.subText}> </Text>
                        <Text style={{fontSize:30,fontWeight:'bold'}}>Case List</Text>
                        
                    </View>
                    <TouchableOpacity style={styles.btn}  
                   onPress={() =>  navigation.navigate('NewStore')}
                    
                    >
                    
                        <Text style={{color: 'white',fontWeight:'bold'}}> 
                            Add Case
                        </Text>
                    </TouchableOpacity>
                </View>
              
            </View>
           
        


            <View style={{ flexDirection: 'row', justifyContent: 'space-between',padding:10,backgroundColor:'#eee',margin:5 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                      
                        <Entypo name="suitcase" style={styles.icon} size={50} color="#ccc" />

                        <View>
                         <Text style={styles.item}>{data[data.length - 1].item.StoreName}</Text>
                         <Text style={{marginLeft:10,color:'gray'}}>case Number: {data[data.length - 1].item.names}</Text>                       
                        </View>
                       
                    </View>
                    <TouchableOpacity style={[styles.btn,{backgroundColor: "#42a5f5",}]} onPress={() => {navigation.navigate('Last', {last})}} >
                        <Text style={{color: 'white'}}>View Case</Text>
                    </TouchableOpacity>
                </View>
            

    </View>
  )
}

export default News

const styles = StyleSheet.create({

    container: {
        flex: 1,
      },
    img:{
        width: 200,
        height: 100,
        marginTop: 20,
    },
    btn:{
        width: 100,
        height: 40,
        backgroundColor: "#9575cd",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 30,
    },

    sectionHeader: {
      backgroundColor:'#F7F8FA',
      borderBottomEndRadius: 50,
      borderBottomStartRadius: 50,
      marginTop: 15,
      padding:20,
      marginBottom:60
    },
    item: {
      paddingLeft:10,
      paddingRight: 10,
      fontSize: 18,
      textAlign: 'left',
      marginTop:7
    },

    subText:{
        fontSize: 22,
        color: 'rgb(128, 128, 128)',
        paddingLeft:20,
    },
    text:{
        fontSize: 22,
    },

})