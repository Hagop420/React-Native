import { ScrollView, Text, View } from 'react-native';
import {Card} from 'react-native-elements' 
import { useSelector } from 'react-redux';
import { baseURL } from '../shared/baseUrl';


const FeaturedItem = ({ item }) => {
   if (item) {
      return (
         <Card containerStyle={{ padding: 0 }}>
            <Card.Image source={{uri: baseURL + item.image}}>
               <View style={{ justifyContent: 'center', flex: 1 }}>
                  <Text style={{
                     color: '#fff',
                     // width:300,
                     margin: 'auto',
                     fontSize:'20px',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems:'center',
                     textAlign: "center",
                    fontWeight:'bold'
                  }}>
                    {item.name} 
                  </Text>
               </View>
            </Card.Image>

            <Text style={{ margin: 20 }}>
            {item.description} 

            </Text>
         </Card>
      )
   }
   return <View/>
}

const HomeScreen = () => {
const campsites=useSelector((state) =>state.campsites)
const promotions=useSelector((state) =>state.promotions)
const partners=useSelector((state) =>state.partners)

// find

   const featCampsite = campsites.campsitesArray.find((camp) => camp.featured)
   const featPartners = partners.partnersArray.find((part) => part.featured)
   const featPromotions = promotions.promotionsArray.find((promo) => promo.featured)

   return (
      <ScrollView>
      <FeaturedItem item={featCampsite} />
      <FeaturedItem item={featPartners} />
      <FeaturedItem item={featPromotions} />
      </ScrollView>
   )
}



export default HomeScreen