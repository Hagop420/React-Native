import {
   useEffect,
   useState
} from 'react';
import {
   View,
   StyleSheet,
   ScrollView,
   Image
} from 'react-native';
import {
   CheckBox,
   Button,
   Input,
   Icon
} from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { baseUrl } from '../shared/baseUrl';
import * as ImagePicker from 'expo-image-picker'
import logo from '../assets/images/logo.png'


const LoginTabs = ({navigation}) => {
   const [userName, setUserName] = useState('')
   const [password, setPassword] = useState('')
   const [rememberMe, setRememberMe] = useState(false)


   // remember info
   useEffect(() => {
      SecureStore.getItemAsync('userinfo').then((userDta) => {
         const userinfo = JSON.parse(userDta)
       
         if (userinfo) {
            setUserName(userinfo.userName)
            setPassword(userinfo.password)
            setRememberMe(true)
         }
      })
   }, [])

   // remember info end

   const handleLogin = () => {
      console.log(`username: ${userName}`);
      console.log(`password: ${password}`);
      console.log(`Remember_Me: ${rememberMe}`);

      if (rememberMe) {
         SecureStore.setItemAsync(
            'userinfo',
            JSON.stringify({
               userName,
               password
            })
         ).catch((err) => console.log(`Could not save ${err}`))
         
      } else {
         SecureStore.deleteItemAsync('userinfo').catch((err) => {
            console.log(`Could not save ${err}`);
         })
      }
   }

   return (
      <View style={styles
         .container}>
         <Input
            placeholder='username'
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            onChangeText={(txt) => setUserName(txt)}
            value={userName}
            containerStyle={styles.formInput}
            leftIconContainerStyle={styles.formIcon}
            />
         <Input
            placeholder='Password'
            leftIcon={{ type: 'font-awesome', name: 'key' }}
            onChangeText={(txt) => setPassword(txt)}
            value={password}
            containerStyle={styles.formInput}
            leftIconContainerStyle={styles.formIcon}
         />
         
         {/* Rember me checkbox */}
         <CheckBox
            title='Remember Me'
            center
            checked={rememberMe}
            onPress={()=> setRememberMe(!rememberMe)}
            containerStyle={styles.formCheckbox}
         />
         {/* Login button */}
         <View style={styles.formLoginButton}>
            <Button
               onPress={() => handleLogin()}
               title='Login'
               color='#fff'
               icon={
                  <Icon
                     name='sign-in'
                     type='font-awesome'
                     color='#fff'
                     iconStyle={{marginRight:10}} />
                  }
                  buttonStyle={{backgroundColor:'blue'}}
                  />

         </View>
         <View style={styles.formLoginButton}>
            <Button
               onPress={() => navigation.navigate('Register')}
               title='Register'
               type='#000'
               icon={
                  <Icon
                     name='user-plus'
                     type='font-awesome'
                     color='yellow'
                     iconStyle={{marginRight:10}} />
               }
               titleStyle={{color:'yellow'}}
            />
         </View>
      </View>
   )

   



}

const RegTab = () => {
const [username, setUserName] = useState('');
const [password, setPassword] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [rememberMe, setRememberMe] = useState(false);

const [imageUrl, setImageUrl] = useState(baseUrl + 'images/logo.png')
// remember me code 

const handleRegister = () => {
   const userIn = {
      username,
      password,
      firstName,
      lastName,
      email,
      rememberMe
   }
   
   console.log(JSON.stringify(userIn));

   if (rememberMe) {
      SecureStore.setItemAsync(
         'userinfo',
         JSON.stringify({
            username,
            password
         })
      ).catch((err) => console.log(`Could not save ${err}`))
      
   } else {
      SecureStore.deleteItemAsync('userinfo').catch((err) => {
         console.log(`Could not save ${err}`);
      })
   }
}
   
   const getImageFromCamera = async () => {
      const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();

      if (cameraPermission.status === 'granted') {
         const capturedImage = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1]
         });
         
         if (capturedImage.assets) {
            console.log(capturedImage.assets[0]);
            setImageUrl(capturedImage.assets[0].uri);
        }
      }

}


   return (
      <>
         <ScrollView>

      <View style={styles
         .container}>
               <View style={styles.imageContainer}>
                  <Image
                     source={{ uri: imageUrl }}
                     loadingIndicatorSource={logo}
                     style={styles.image}
                  />

                  <Button
                     title='Camera'
                     onPress={getImageFromCamera}
                  />
               </View>
         <Input
            placeholder='username'
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            onChangeText={(txt) => setUserName(txt)}
            value={username}
            containerStyle={styles.formInput}
            leftIconContainerStyle={styles.formIcon}
            />
            <Input
               placeholder='First Name'
               leftIcon={{ type: 'font-awesome', name: 'user' }}
               onChangeText={(txt) => setFirstName(txt)}
               value={firstName}
               containerStyle={styles.formInput}
               leftIconContainerStyle={styles.formIcon}
            />
         <Input
            placeholder='Last Name'
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            onChangeText={(txt) => setLastName(txt)}
            value={lastName}
            containerStyle={styles.formInput}
            leftIconContainerStyle={styles.formIcon}
         />
         <Input
            placeholder='Email'
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={(txt) => setEmail(txt)}
            value={email}
            containerStyle={styles.formInput}
            leftIconContainerStyle={styles.formIcon}
         />
         <Input
            placeholder='Password'
            leftIcon={{ type: 'font-awesome', name: 'key' }}
            onChangeText={(txt) => setPassword(txt)}
            value={password}
            containerStyle={styles.formInput}
            leftIconContainerStyle={styles.formIcon}
         />
         
         {/* Rember me checkbox */}
         <CheckBox
            title='Remember Me'
            center
            checked={rememberMe}
            onPress={()=> setRememberMe(!rememberMe)}
            containerStyle={styles.formCheckbox}
         />
         {/* Login button */}
         <View style={styles.formLoginButton}>
            <Button
               onPress={() => handleRegister()}
               title='Register'
               color='#fff'
               icon={
                  <Icon
                     name='user-plus'
                     type='font-awesome'
                     color='#fff'
                     iconStyle={{marginRight:10}} />
                  }
                  buttonStyle={{backgroundColor:'blue'}}
                  />

         </View>
      </View>
         </ScrollView>
      </>
      )
   
   
}

const Tab = createBottomTabNavigator()

const LoginScreen = () => {
   const tabBarOpt = {
      activeBackgroundColor: '#000',
      inactiveBackgroundColor: '#ddd',
      activeTintColor:'yellow',
      inactiveTintColor: '#808080',
      labelStyle:{fontSize:16}
   }


   return (
      <Tab.Navigator
         tabBarOptions={tabBarOpt}>
         <Tab.Screen
            name='Login'
            component={LoginTabs}
            options={{
               tabBarIcon: (props) => {
                  return (
                     <Icon
                        name='sign-in'
                        type='font-awesome'
                        color={props.color}
                     />
                  )
               }
            }}
         />

         <Tab.Screen
            name='Register'
            component={RegTab}
            options={{
               tabBarIcon: (props) => {
                  return (
                     <Icon
                        name='user-plus'
                        type='font-awesome'
                        color={props.color}
                     />
                  )
               }
            }}
         />
         </Tab.Navigator>

   )
}


// css styling

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      margin: 10
  },
   formIcon: {
       marginRight: 10
   },
   formInput: {
      padding: 8,
      height:60
   },
   formCheckbox: {
       margin: 10,
       backgroundColor: null
   },
   formLoginButton: {
      fontWeight:'bold',
      backgroundColor:'black',
      margin: 20,
      marginRight: 40,
      marginLeft:40
   },
   imageContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      margin: 10
  },
  image: {
      width: 60,
      height: 60
  }
  
});


export default LoginScreen;