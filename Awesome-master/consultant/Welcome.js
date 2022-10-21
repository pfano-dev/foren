import React,{useState, useEffect} from 'react';
import {StyleSheet, View, Text , SectionList, Image, Pressable,  RefreshControl, } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getDatabase, ref, onValue, push, set } from 'firebase/database';
import { useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';

export default function Welcome({navigation}){


  const route = useRoute();

  const prevData = route.params;



  const signOuto = () => {
    navigation.replace('Login')
      };

  console.log(prevData)
  console.log("..........................................this is data....",prevData);

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
       
        
 
  

//   },[]);
    // const db = getDatabase();
    // const starCountRef = ref(db, 'posts/' + postId + '/starCount');
    // onValue(starCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   updateStarCount(postElement, data);
    // });


    function tempElement(item,navigation,prevData){
 
        // console.log('........................this is data',item);

        return(
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Ionicons name="ios-business" style={styles.icon} size={50} color={'#ccc'}/>
                    <Text style={styles.item}>{item.item.StoreName}</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('CheckIn', { item})}} >
                    <Text style={{color: 'white'}}>Check in</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
    




    return(

     
        <View style={styles.container}>











       
<View style={styles.sectionHeader}>
                <Image style={styles.img} source={require('../assets/gootders_03.png')} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text> </Text>
                        <Text style={styles.subText}>Hello Forensic </Text>
                        
                        
                    </View>
                   
                </View>
                <Text style={{fontSize:20, fontWeight:'bold', marginLeft:150,position:'absolute',top:55,right:25}} onPress={()=> signOuto()}> Log out</Text>
            </View>
           
          




<View style={{width:"100%",justifyContent:'center',alignItems:'center'}}>

          <TouchableOpacity
            onPress={()=>navigation.navigate("News")}
        >
                <View style={styles.cardL} >
                    <Text style={{margin:20,fontSize:20,fontWeight:'bold',color:'white'}}>Latest Case</Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity
            onPress={()=>navigation.navigate("Case")}
        >
                <View style={styles.card} >
                <Text style={{margin:20,fontSize:20,fontWeight:'bold',color:'white'}}>My Case</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>Linking.openURL('https://www.forensics4africa.com/')}
        
        >
                <View style={styles.card} >
                <Text style={{margin:20,fontSize:20,fontWeight:'bold',color:'white'}}>News</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
              onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=7SkFFG6MQFk')}
              
        >
                <View style={styles.card} >
                <Text style={{margin:20,fontSize:20,fontWeight:'bold',color:'white'}}>Explore</Text>
                </View>
                </TouchableOpacity>
               
            
      </View>












        </View>
      
    );
}

const styles = StyleSheet.create({





    card: {
        width: 380,
        height: 130,
        margin: 10,
        backgroundColor: "#9575cd",
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center'
        
      },
      cardL: {
        width: 380,
        height: 230,
        margin: 10,
        backgroundColor: "#42a5f5",
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center'
        
      },

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
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 30,
    },

    sectionHeader: {
      backgroundColor:'#F7F8FA',
      borderBottomEndRadius: 50,
      borderBottomStartRadius: 50,
      marginLeft: 5,
      paddingBottom:20,
    },
    item: {
      paddingBottom: 10,
      paddingTop: 20,
      paddingLeft:10,
      paddingRight: 10,
      fontSize: 18,
      height: 60,
      textAlign: 'left'
    },

    subText:{
        fontSize: 22,
        color: 'rgb(128, 128, 128)',
        paddingLeft:50,
    },
    text:{
        fontSize: 22,
    },

});

