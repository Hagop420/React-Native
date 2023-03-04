import { StyleSheet, Alert, PanResponder, Text, View, Button } from "react-native";
import { Card, Icon } from "react-native-elements";
import { baseUrl } from "../../shared/baseUrl";
import * as Animatable from 'react-native-animatable'
import { useRef } from "react";


const RenderCampsite = (props) => {

   const {campsite} = props
   const isLeftSwipe = ({dx}) => dx < -200
   const view=useRef()

   const PanHandlerResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
         view.current
            .pulse(1000)
            .then((endSt) => console.log(endSt.finished ? 'finished' : 'canceled')
            )
      },
      onPanResponderEnd: (e, gState) => {
         console.log('Pan responder end:', gState);

        
         
         if (isLeftSwipe(gState)) {
            Alert.alert(
               'Add to Favorites',
               'Are you sure you wish to add ' +
               campsite.name +
               ' to favorites?',
               [
                  {
                     text: 'Cancel',
                     style: 'cancel',
                     onPress:()=> console.log('Cancel Pressed')
                  },
                  {
                     text: 'Ok',
                     onPress:()=> props.isFavorite ? console.log('Already set as Favorite') : props.markFavorite()
                  }
                  
               ],
               {cancelable:false}
            )
         }
      }
   })
   if (campsite) {
      return (
         <Animatable.View
            animation={'fadeInDownBig'}
            duration={900}
         ref={view}
            {...PanHandlerResponder.panHandlers}
            delay={900}>
         <Card containerStyle={ styles.cardContain }>
            <Card.Image source={{uri: baseUrl + campsite.image}}>
               <View style={{justifyContent:'center', flex:1}}>
                  <Text style={styles.cardText}>
                     
                     {campsite.name}
                 </Text>
               </View>
            </Card.Image>
            <Text style={{ margin: 20, textAlign: 'center' }}>{campsite.description}</Text>

            <View style={styles.cardRow}>
            <Icon name={props.isFavorite ? 'heart' : 'heart-o'}
               type='font-awesome'
               color='red'
               raised
               reverse
              onPress={()=> props.isFavorite? console.log('Favorite campsite clicked') :props.markFavorite()}
            />

            {/* pencil icon add */}
            <Icon
               name='pencil'
               type='font-awesome'
               color='#5637DD'
               raised
               reverse
               onPress={() => props.onShowModal()}
               />
               
               </View>
            {/* pencil icon end */}
            
        </Card>
        </Animatable.View>
      )
      return <View/>
   }
}

const styles = StyleSheet.create({
   cardContain: {
      padding: 0,
      margin: 0,
      marginBottom: 20,
   },
   cardRow:{
   alignItems: 'center',
   justifyContent: 'center',
   flex: 1,
   flexDirection: 'row',
   margin: 20,
},
   cardText: {
      textShadowColor: 'rgba(0, 0, 0, 1)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 20,
      textAlign: 'center',
      color: 'white',
      fontSize: 20
   }
})

export default RenderCampsite