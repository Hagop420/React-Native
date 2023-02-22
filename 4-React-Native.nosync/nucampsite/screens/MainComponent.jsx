import { useState } from 'react';
import { Platform,StyleSheet,View } from 'react-native';
import  Constants from 'expo-constants';
import CampsiteInfoScreen from './CampsiteInfoScreen';
// import { CAMPSITES } from '../shared/campsites'
import DirectoryScreen from './DirectoryScreen';
import {createStackNavigator } from '@react-navigation/stack';
import {StackActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import { Icon } from 'react-native-elements';

const Drawer=createDrawerNavigator()

const screenOptions = {
   backgroundColor: '#333',
   headerStyle: {backgroundColor:'#5637DD'}
}
const AboutOptions = {
   backgroundColor: '#333',
   headerStyle: {backgroundColor:'#5637DD'}
}
const ContactOptions = {
   backgroundColor: '#333',
   headerStyle: {backgroundColor:'#f0f'}
}



const HomeNavigator = () => {
   const Stack=createStackNavigator()

   return (
      <Stack.Navigator
      screenOptions={screenOptions}>
             <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={({ navigation }) => ({
               title: 'Home',
               headerLeft: () => (
                  <Icon
                     name='home'
                     type='font-awesome'
                     iconStyle={styles.stackIcon}
                     onPress={() =>  navigation.toggleDrawer()} />
               )
            })}
         />
      </Stack.Navigator>
   )
}


const AboutNavigator = () => {
   const Stack=createStackNavigator()

   return (
      <Stack.Navigator
      screenOptions={AboutOptions}>
             <Stack.Screen
            name='About'
            component={AboutScreen}
            options={({ navigation }) => ({
               headerLeft: () => (
                  <Icon
                     name='info-circle'
                     type='font-awesome'
                     iconStyle={styles.stackIcon}
                     onPress={() =>  navigation.toggleDrawer()} />
               )
            })}
         />
      </Stack.Navigator>
   )
}

const ContactNavigator = () => {
   const Stack=createStackNavigator()

   return (
      <Stack.Navigator
      screenOptions={ContactOptions}>
             <Stack.Screen
            name='Contact'
            component={ContactScreen}
            options={({ navigation }) => ({
               title:'Contact Us',
               headerLeft: () => (
                  <Icon
                     name='address-card'
                     type='font-awesome'
                     iconStyle={styles.stackIcon}
                     onPress={() =>  navigation.toggleDrawer()} />
               )
            })}
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
            options={({ navigation }) => ({
               title:'Campsite Directory',
               headerLeft: () => (
                  <Icon
                     name='list'
                     type='font-awesome'
                     iconStyle={styles.stackIcon}
                     onPress={() =>  navigation.toggleDrawer()} />
               )
            })}
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
                  options={{
                     title: 'Home',
                     drawerIcon: ({ color }) =>(
                        <Icon
                         name='home'
                         type='font-awesome'
                           size={24}
                           iconStyle={{width:24}}
                           color={color}
                         />
                     )
                     }}/>

               


               <Drawer.Screen
                  name='Directory'
                  component={DirectoryNavigator}
                  options={{
                     title: 'Directory',
                     drawerIcon: ({ color }) =>(
                        <Icon
                         name='list'
                         type='font-awesome'
                           size={24}
                           iconStyle={{width:24}}
                           color={color}
                         />
                     )
                  }}
                  
                />

               

               <Drawer.Screen
                  name='About'
                  component={AboutNavigator}
                  options={{
                     title: 'About',
                     drawerIcon: ({ color }) =>(
                        <Icon
                         name='info-circle'
                         type='font-awesome'
                           size={24}
                           iconStyle={{width:24}}
                           color={color}
                         />
                     )
                  }}
              />

               
               <Drawer.Screen
                  name='Contact'
                  component={ContactNavigator}
                  options={{
                     title:'Contact',
                     drawerIcon: ({ color }) =>(
                        <Icon
                         name='phone'
                         type='font-awesome'
                           size={24}
                           iconStyle={{width:24}}
                           color={color}
                         />
                     )
                  }}
                />

               
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

const styles = StyleSheet.create({
   stackIcon: {
       marginLeft: 10,
       color: '#fff',
       fontSize: 24
   }
});

export default Main




// Navigation menu 