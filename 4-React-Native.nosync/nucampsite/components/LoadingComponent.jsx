import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'


const Loading = () => {
   return (
      <>
         <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='blue'>
               <Text style={styles.loadingText}>
               
               </Text>
            </ActivityIndicator>
         </View>
      </>
   )
}


// loading style's
const styles = StyleSheet.create({
   loadingView: {
       alignItems: 'center',
       justifyContent: 'center',
       margin:30,
       flex: 1
   },
   loadingText: {
      color: 'blue',
      fontSize: 32,
       display:'block',
       fontWeight: 'bold'
   }
});

export default Loading