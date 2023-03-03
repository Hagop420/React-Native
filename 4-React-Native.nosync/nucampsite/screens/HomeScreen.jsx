import { ScrollView, Text, View, Animated } from 'react-native';
import {Card} from 'react-native-elements' 
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from "../components/LoadingComponent";
import {useEffect, useRef} from 'react'



const FeaturedItem = (props) => {
   const {item} = props
   if (props.isLoading) {
      return  <Loading/>
      
   }

   if (props.errMess) {
      return <View><Text>{props.errMess}</Text></View>
   }


   if (item) {
      return (
         <Card containerStyle={{ padding: 0 }}>
            <Card.Image source={{uri: baseUrl + item.image}}>
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
   return <View />
}

const HomeScreen = () => {
const campsites=useSelector((state) =>state.campsites)
const promotions=useSelector((state) =>state.promotions)
const partners=useSelector((state) =>state.partners)
const scaleVal=useRef(new Animated.Value(0)).current
   const scaleAnimation = Animated.timing(scaleVal, {
      toValue: 1,
      duration: 1200,
      useNativeDriver:true
})

console.log(campsites);
console.log(promotions);
console.log(partners);

// find

   const featCampsite = campsites.campsitesArray.find((camp) => camp.featured)
   const featPartners = partners.partnersArray.find((part) => part.featured)

   const featPromotions = promotions.promotionsArray.find((promo) => promo.featured)

   useEffect(() => {
   scaleAnimation.start()
}, [])
   return (
      <Animated.ScrollView
      style={{transform:[{scale: scaleVal}]}}>
  
         <FeaturedItem item={featCampsite}
            isLoading={campsites.isLoading}
            errMess={campsites.errMess} />
         
         <FeaturedItem item={featPartners}
            isLoading={partners.isLoading}
            errMess={ partners.errMess } />
         <FeaturedItem item={featPromotions}
            isLoading={promotions.isLoading}
            errMess={ promotions.errMess } />
         
      </Animated.ScrollView>
   )
}



export default HomeScreen