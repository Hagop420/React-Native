import { StyleSheet, Alert, Modal, PanResponder, TouchableOpacity, Text, View, Button } from "react-native";
import { Card, Input, Icon, Rating } from "react-native-elements";
import { baseUrl } from "../../shared/baseUrl";
import * as Animatable from 'react-native-animatable'
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";



const RenderCampsite = (props) => {
   const [rating, setRating] = useState(5)
   const [author, setAuthor] = useState('')
   const [text, setText] = useState('')

   const {campsite} = props
   const [showModal, setShowModal] = useState(false)
   const isLeftSwipe = ({dx}) => dx < -200
   const view=useRef()
   const isRightSwipe = ({dx}) => dx < 200


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
            handleSubmit();
            setShowModal(true)
         }
      }
   })

   const resetForm = () => {
      setRating(5)
      setAuthor(5)
      setText('')
      setShowModal(!showModal)
   }


   const handleSubmit = () => {
      const newComment = {
        author,
        rating,
        text,
        campsiteId: campsite.id
      };
 
     setShowModal(!showModal)
  }
   
   const toggleModal = () => {
      setShowModal(!showModal)
   }
   // const dispatch=useDispatch()

   if (campsite) {

      return (
         <Animatable.View
            // animation={'fadeInDownBig'}
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

        <Modal
            animationType='fade'
            transparent={false}
            visible={showModal}
            onShowModal={() => setShowModal(!showModal)}
         
         >
            <View style={styles.modal}>
               <Rating
                  showRating
                  imageSize={40}
                  readonly
                  onFinishRating={(rating) => setRating(rating)} 
                  startingValue={1}
                  style={{ paddingVertical: 10 }}
               
               />

               <Input
                  placeholder='Author'
                  leftIconContainerStyle={{paddingRight:10}}
                  
                  onChangeText={(rating) => setRating(rating)}
                  leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                  
                  
               />
                  
               
               
               <Input
                placeholder='Comment'
                leftIcon={{type: 'font-awesome',name:'comment-o'}}
                leftIconContainerStyle={{paddingRight:10}}
                onChangeText={(rating) => setRating(rating)}
               />
               
               <View
                  style={{margin:10}}>
                

                  {/* touch submit */}
                  <TouchableOpacity
                      onPress={() => {
                        handleSubmit();
                        resetForm();
                      }} >
               
                     <Text
                        style=
                        {{
                           textAlign: 'center',
                           padding: 10,
                           margin:10,
                           color: '#fff',
                           fontWeight: 'bold',
                           backgroundColor:'blue'}}
                        onPress={() => {
                           handleSubmit();
                           resetForm();
                        }}
                      >Submit</Text>
  
                  </TouchableOpacity>
                  {/* end */}

               </View>
                  
                  
                  
               <View style={{margin: 20}}>
                  <TouchableOpacity
                     onPress={() => setShowModal(!showModal)} >
               
                     <Text
                        onPress={() => {
                           handleSubmit();
                           resetForm();
                        }}
                        style={styles.cancelButton}>Cancel</Text>
  
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
         
       
        
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
   cardRow: {
     alignItems: "center",
     justifyContent: "center",
     flex: 1,
     flexDirection: "row",
     margin: 20,
   },
   cardText: {
     textShadowColor: "rgba(0, 0, 0, 1)",
     textShadowOffset: { width: -1, height: 1 },
     textShadowRadius: 20,
     textAlign: "center",
     color: "white",
     fontSize: 20,
   },
   modal: {
     justifyContent: "center",
     margin: 20,
   },
   modalTitle: {
     fontSize: 24,
     fontWeight: "bold",
     backgroundColor: "#5637DD",
     textAlign: "center",
     color: "#fff",
     marginBottom: 20,
   },
   modalText: {
     fontSize: 18,
     margin: 10,
   },
   modalButtons: {
     margin: 10,
   },
   cancelButton: {
      textAlign:'center',
      backgroundColor: 'red',
      padding: 10,
      color: '#000',
      fontWeight:'bold'
   }
 });
 
//  const styles = StyleSheet.create({
//    formRow: {
//       alignItems: 'center',
//       justifyContent: 'center',
//       flex: 1,
//       flexDirection: 'row',
//       margin: 20
//    },
//    formLabel: {
//       fontSize: 18,
//       flex: 2
//    },
//    formItem: {
//       flex: 1
//    },
//    modal: {
//       justifyContent: 'center',
//       margin: 20,
//    },
//    modalTitle: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       backgroundColor: 'blue',
//       textAlign: 'center',
//       marginBottom: 20,
//       color:'#fff',
//    },
//    modalText: {
//       fontSize: 18,
//       margin: 10
//   }
// });
 export default RenderCampsite
