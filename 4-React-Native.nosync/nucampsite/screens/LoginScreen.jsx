import { useEffect, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { CheckBox, Input } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';



const LoginScreen = () => {
   const [userName, setUserName] = useState('')
   const [password, setPassword] = useState('')
   const [rememberMe, setRememberMe] = useState(false)



   const handleLogin = () => {
      console.log(`username: ${userName}`);
      console.log(`password: ${password}`);
      console.log(`Remember_Me: ${rememberMe}`);
   }

   return (
      <View style={StyleSheet.container}>
         <Input
            placeholder='username'
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            onChangeText={((txt) => setUserName(txt))}
            value={username}
            containerStyle={StyleSheet.formInput}
            leftIconContainerStyle={styles.formIcon}
            />
         <Input
            placeholder='Password'
            leftIcon={{ type: 'font-awesome', name: 'key' }}
            onChangeText={((txt) => setPassword(txt))}
            value={password}
            containerStyle={StyleSheet.formInput}
            leftIconContainerStyle={styles.formIcon}
         />
         
         {/* Rember me checkbox */}
         <Checkbox
            title='Remember My info'
            center
            onPress={()=> setRememberMe(!rememberMe)}
            containerStyle={style.formCheckbox}
         />
         {/* Login button */}
         <View style={styles.formButton}>
            <Button
               onPress={() => handleLogin()}
               title='Login'
               color='lime'
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
   formButton: {
       margin: 40
   }
});


export default LoginScreen