import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import { baseUrl } from "../../shared/baseUrl";


const RenderCampsite = (props) => {
   const {campsite} = props
   if (campsite) {
      return (
         <Card containerStyle={ styles.cardContain }>
            <Card.Image source={{uri: baseUrl + campsite.image}}>
               <View style={{justifyContent:'center', flex:1}}>
                  <Text style={{
                     color: '#fff',
                     fontWeight: 'bold',
                     fontSize:20,
                     textAlign:'center'
                  }}>
                     
                     {campsite.name}
                 </Text>
               </View>
            </Card.Image>
            <Text style={{ margin: 20,textAlign:'center' }}>{ campsite.description}</Text>
            <Icon name={props.isFavorite ? 'heart' : 'heart-o'}
               type='font-awesome'
               color='red'
               raised
               reverse
              onPress={()=> props.isFavorite? console.log('Favorite campsite clicked') :props.markFavorite()}
            />
        </Card>
      )
      return <View/>
   }
}

const styles = StyleSheet.create({
   cardContain: {
      padding: 0,
      margin: 0,
      marginBottom: 20,
   }
})

export default RenderCampsite