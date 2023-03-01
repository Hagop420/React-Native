import { useState } from 'react';
import {
   FlatList,
   StyleSheet,
   Text,
   Button,
   Modal,
   View
} from 'react-native';
import { COMMENTS } from '../shared/comments';
import RenderCampsite from '../features/campsites/RenderCampsite'
import { useSelector, useDispatch } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import { toggleFavorite } from '../features/favorites/favoritesSlice';

const CampsiteInfoScreen = ({route}) => {
   const {campsite} = route.params

   const favs=useSelector((state) => state.favorites)

   // dispatch()
   const dispatch = useDispatch()

   // comments useSelector()
   const comms=useSelector((state) => state.comments)


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
               />
               <Text style={styles.commentsTitle}>Comments</Text>
            </>
         }
      />
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
   }
})


export default CampsiteInfoScreen



// show the actual images and the nav image and text 