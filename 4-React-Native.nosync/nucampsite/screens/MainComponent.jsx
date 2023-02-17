import { useState } from 'react';
import { Platform,View } from 'react-native';
import { Constants } from 'expo-constants';
import CampsiteInfoScreen from './CampsiteInfoScreen';
// import { CAMPSITES } from '../shared/campsites'
import DirectoryScreen from './DirectoryScreen';
import {createStackNavigator } from '@react-navigation/stack';
import {StackActions } from '@react-navigation/native';

const DirectoryNavigator = () => {
   const Stack = createStackNavigator();
   return (
      <Stack.Navigator
         initialRouteName='Directory'
         screenOptions={{
            headerStyle: {
               backgroundColor: '#333'
            },
            headerTintColor: '#fff',

         }}
         
      >
         <Stack.Screen
            name='Directory'
            component={DirectoryScreen}
            options={{title:'Campsite Directory'}}
         />

         <Stack.Screen
            name='CampsiteInfo'
            component={CampsiteInfoScreen}
            options={({ route }) => ({
               title: route.params.campsite.name
             })}
         
            
         
   
         />
      </Stack.Navigator>
   )
}
const Main = () => {
   
   // directoryScreen return here with campsite prop
   return (
      <>
         <View style={{
            flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight




         }}
         >
            <DirectoryNavigator/>
         </View>
         



      {/* <DirectoryScreen campsites={campsites}
            
            onPress={(camp) => setSelectedCampsiteId(camp)}
         />
         <CampsiteInfoScreen campsite={campsites.filter((camp) =>camp.id===selectedCampsiteId)[0]}
/> */}
      </>
   )
}

export default Main