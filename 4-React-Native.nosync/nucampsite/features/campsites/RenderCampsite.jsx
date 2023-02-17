import { Text, View } from "react-native";
import { Card } from "react-native-elements";


const RenderCampsite = ({campsite}) => {
   if (campsite) {
      return (
         <Card containerStyle={{ margin: 1 }}>
            <Card.Image source={campsite.image}>
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
            <Text style={{ margin: 20 }}>{ campsite.description}</Text>
        </Card>
      )
      return <View/>
   }
}

export default RenderCampsite