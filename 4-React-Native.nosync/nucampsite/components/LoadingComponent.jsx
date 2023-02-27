import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'


const Loading = () => {
   return (
      <>
         <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='blue'>
               <Text style={styles.loadingText}>
                  Loading...
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
       flex: 1
   },
   loadingText: {
       color: 'blue',
       fontSize: 14,
       fontWeight: 'bold'
   }
});

export default Loading