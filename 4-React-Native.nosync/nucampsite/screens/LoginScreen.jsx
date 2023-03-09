import { useEffect, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { CheckBox, Input } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';



const LoginScreen = () => {
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
            containerStyle={StyleSheet.formInput}
            leftIconContainerStyle={styles.formIcon}
            />
         <Input
            placeholder='Password'
            leftIcon={{ type: 'font-awesome', name: 'key' }}
            onChangeText={(txt) => setPassword(txt)}
            value={password}
            containerStyle={StyleSheet.formInput}
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
            />
         </View>
      </View>
   )

   



}


// css styling

const styles = StyleSheet.create({
   container: {
       justifyContent: 'center',
       margin: 20
   },
   formIcon: {
       marginRight: 10
   },
   formInput: {
       padding: 10
   },
   formCheckbox: {
       margin: 10,
       backgroundColor: null
   },
   formLoginButton: {
      fontWeight:'bold',
      backgroundColor:'green',
       margin: 40
   }
});


export default LoginScreen