import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import {Card} from 'react-native-elements'
import {CAMPSITES} from '../shared/campsites'
import {PROMOTIONS} from '../shared/promotions'
import {PARTNERS} from '../shared/partners'


const FeaturedItem = ({ item }) => {
   if (item) {
      return (
         <Card containerStyle={{ padding: 0 }}>
            <Card.Image source={item.image}>
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
const [campsites, setCampsites] = useState(CAMPSITES)
const [partners, setPartners] = useState(PARTNERS)
const [promotions, setPromotions] = useState(PROMOTIONS)

   const featCampsite = campsites.find((camp) => camp.featured)
   const featPartners = partners.find((part) => part.featured)
   const featPromotions = promotions.find((promo) => promo.featured)

   return (
      <ScrollView>
      <FeaturedItem item={featCampsite} />
      <FeaturedItem item={featPartners} />
      <FeaturedItem item={featPromotions} />
      </ScrollView>
   )
}



export default HomeScreen