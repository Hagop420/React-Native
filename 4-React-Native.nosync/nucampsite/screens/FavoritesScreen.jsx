import { useSelector } from "react-redux";
import { View, FlatList, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import Loading from '../components/LoadingComponent'
import { baseUrl } from "../shared/baseUrl";



const FavoritesScreen = ({ navigation }) => {
   const { campsitesArray, isLoding, errMess } = useSelector((state) => state.campsites)
   
   const favorites = useSelector((state) => state.favorites)

   const renderFavItem = ({item:campsite}) => {
      return (
         <ListItem
            
         onPress={() => navigation.navigate()}>

         </ListItem>
      )
      
   }


   if (isLoding) {
    return <Loading/>
   }
   
   // error
   if (errMess) {
      return (
         <View>
            <Text>{errMess}</Text>
         </View>
    )
   }
   return (
      <FlatList
         data={campsitesArray.filter((campsite) => favorites.includes(campsite.id))}
         renderItem={renderFavItem}
         keyExtractor={(item) => item.id.toString()} />
   )
}


export default FavoritesScreen