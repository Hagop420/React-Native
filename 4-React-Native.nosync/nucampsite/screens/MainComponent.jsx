import { useState } from 'react';
import { Platform,View } from 'react-native';
import  Constants from 'expo-constants';
import CampsiteInfoScreen from './CampsiteInfoScreen';
// import { CAMPSITES } from '../shared/campsites'
import DirectoryScreen from './DirectoryScreen';
import {createStackNavigator } from '@react-navigation/stack';
import {StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';


const Drawer=createDrawerNavigator()

const screenOptions = {
   backgroundColor: '#333',
   headerStyle: {backgroundColor:'5637DD'}
}


const HomeNavigator = () => {
   const Stack=createStackNavigator()

   return (
      <Stack.Navigator
      screenOptions={screenOptions}>
             <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{title:'Home'}}
         />
      </Stack.Navigator>
   )
}



const DirectoryNavigator = () => {
   const Stack = createStackNavigator();
   return (
      <Stack.Navigator
         initialRouteName='Directory'
         screenOptions={screenOptions}
         
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
            flex: 1, paddingTop: Platform.OS === 'ios' ? 0 :  Constants.statusBarHeight




         }}
         >
            <Drawer.Navigator
              initialRouteName='Home'
              drawerStyle={{backgroundColor:'#ccc'}}>

               <Drawer.Screen
                  name='Home'
                  component={HomeNavigator}
               options={{title:'🏠'}}>

               </Drawer.Screen>


               <Drawer.Screen
                  name='Directory'
                  component={DirectoryNavigator}
               options={{title:'Directory'}}>

               </Drawer.Screen>
            </Drawer.Navigator>
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




// Navigation menu 