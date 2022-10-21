import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Welcome'
import Checkin from './CheckIn'
import Last from './Last'
import NewStore from './NewStore'
import AdditionalRQ from './AdditionalRQ'
import StoreList from './StoreList';
import News from './News';
import CheckOut from './CheckOut';
import Brand from './Brand';
import Case from './Case';


const Stack = createNativeStackNavigator();
export default function ConsultedStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name='Welcome'
                component={Welcome}/>
        

            <Stack.Group screenOptions={{presentation: 'modal'}}>

                <Stack.Screen 
                    name='CheckIn'
                    component={Checkin}/>

<Stack.Screen 
                name='News'
                component={News}/>

                    <Stack.Screen 
                    name='NewStore'
                    component={NewStore}/>
                    <Stack.Screen 
                    name='AdditionalRQ'
                    component={AdditionalRQ}/>
                       <Stack.Screen 
                name='StoreList'
                component={StoreList}/>
                <Stack.Screen 
                    name='CheckOut'
                    component={CheckOut}/>
                <Stack.Screen 
                    name='Last'
                    component={Last}/>
                <Stack.Screen 
                    name='Brand'
                    component={Brand}/>

                <Stack.Screen 
                    name='Case'
                    component={Case}/>



            </Stack.Group>
            
        </Stack.Navigator>
    );
}