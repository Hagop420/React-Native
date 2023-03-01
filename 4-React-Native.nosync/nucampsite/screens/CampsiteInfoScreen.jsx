import { useState } from 'react';
import {
   FlatList,
   StyleSheet,
   Text,
   Modal,
   TouchableOpacity,
   View
} from 'react-native';
import { Rating } from 'react-native-elements';
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
      return (
         <View style={styles.commentItem}>
            <Text style={{ fontSize: 14 }}>{item.text}</Text>
            <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
            <Text style={{ fontSize: 12 }}>{`-- ${item.author}, (${item.date})`} Stars</Text>
         </View>
      )
   }

   return (
      <>
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
               <Rating>

               </Rating>
               <View style={{margin: 20}}>
                  <TouchableOpacity
                     onPress={() => setShowModal(!showModal)} >
               
                        <Text style={styles.cancelButton}>Cancel</Text>
  
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
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
      padding:10,
      color: '#fff',
      fontWeight:'bold',
      backgroundColor: "#808080",
    }
})

export default CampsiteInfoScreen
