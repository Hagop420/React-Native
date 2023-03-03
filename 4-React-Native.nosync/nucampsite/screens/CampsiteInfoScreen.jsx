import { useState } from 'react';
import {
   FlatList,
   StyleSheet,
   Text,
   Modal,
   TouchableOpacity,
   
   View
} from 'react-native';
import { Input, Rating } from 'react-native-elements';
import { postComment } from '../features/comments/commentsSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable'
import { COMMENTS } from '../shared/comments';
import RenderCampsite from '../features/campsites/RenderCampsite'
import { useSelector, useDispatch } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import { toggleFavorite } from '../features/favorites/favoritesSlice';

const CampsiteInfoScreen = ({route}) => {
   const {campsite} = route.params

   const favs=useSelector((state) => state.favorites)

   // new useState hook for workshop 2
   const [showModal, setShowModal] = useState(false);

   // new states

   const [rating, setRating] = useState(5)
   const [author, setAuthor] = useState('')
   const [text, setText] = useState('')

   // open modal  

   const toggleModal = () => {
      setShowModal(!showModal);
    }

   // dispatch()
   const dispatch = useDispatch()

   // comments useSelector()
   const comms=useSelector((state) => state.comments)

   const handleSubmit = () => {
       const newComment = {
         author,
         rating,
         text,
         campsiteId: campsite.id
       };
      dispatch(postComment(newComment))
      console.log(newComment);
      setShowModal(!showModal)
   }
   
   // reset 

   const resetForm = () => {
      setRating(5)
      setAuthor(5)
      setText('')
      setShowModal(!showModal)
   }

   const renderCommentsItem = ({item}) => {
      // return (
      //    <View style={styles.commentItem}>
      //       {/* <Text style={{ fontSize: 14 }}>{item.text}</Text>
      //       <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
      //       <Text style={{ fontSize: 12 }}>{`-- ${item.author}, (${item.date})`} Stars</Text> */}
      //       <item.rating>
      //       <Rating
      //       readonly
      //       startingValue={item.rating}
      //       imageSize={12}
      //       style={{ paddingVertical: 5 }}
      //       />
      //      </item.rating>
      //    </View>
      // )

      return (
         <View style={styles.commentItem}>
           <Text style={{ fontSize: 14 }}>{item.text}</Text>
           <Rating
             readonly
             startingValue={item.rating}
             imageSize={10}
             style={{ paddingVertical: 5,alignItems:'flex-start', paddingVertical:'5%' }}
           />
           <Text style={{ fontSize: 12 }}>{`-- ${item.author}, (${item.date})`}</Text>
         </View>
       )
   }

   return (
      <>
          <Animatable.View
               animation={'fadeInUp'}
               duration={1500}
            delay={1300}>
         <FlatList
            data={comms.commentsArray.filter((comm) => 
              comm.campsiteId===campsite.id
            )}
            renderItem={renderCommentsItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
               marginBottom:20,
               paddingVertical:20
            }}
            ListHeaderComponent={
               <>
                  <RenderCampsite
                     campsite={campsite}
                     isFavorite={favs.includes(campsite.id)}
                     markFavorite={()=> dispatch(toggleFavorite(campsite.id))}
                     onShowModal={() => setShowModal(!showModal)}
                  />
                     
                  <Text style={styles.commentsTitle}>Comments</Text>
               </>
            }
         />
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
      </>
   )
}

const styles = StyleSheet.create({
   commentsTitle: {
      textAlign: 'center',
      fontSize:16,
      fontWeight:'bold',
      padding: 10,
      background: '#fff',
      color:'#43484d',
      paddingTop: 30,
   },
   commentItem: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      background:"#fff"
   },
   modal: {
      margin: 20,
      justifyContent:'center'
   },
   cancelButton: {
      textAlign:'center',
      padding: 10,
      width:'100%',
      color: '#fff',
      fontWeight:'bold',
      backgroundColor: "#808080",
    }
})

export default CampsiteInfoScreen
