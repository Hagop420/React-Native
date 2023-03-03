import { Card,Text,ListItem,Avatar } from "react-native-elements"
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler"
// import { PARTNERS } from "../shared/partners"
import { useSelector } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from '../components/LoadingComponent'
import * as Animatable from 'react-native-animatable'


const Mission = () => {
   return (
      <Card>
         <Card.Title>
            <Text>Our Mission</Text>
         </Card.Title>
         <Card.Divider />
         <Text style={{margin:10}}>
            At Nucamp, we believe that everyone should have access to high-quality outdoor experiences, regardless of their background or experience level. That's why we strive to make camping more accessible, affordable, and fun for everyone. Our mission is to inspire a lifelong love of the outdoors and connect people with nature.
         </Text>
      </Card>
   );
};

const AboutScreen = () => {
   const partners=useSelector((state) => state.partners)

   if (partners.isLoading) {
      return (
         <ScrollView>
            <Animatable.View
               animation={'fadeInDown'}
               duration={1500}
            delay={1300}>
            <Mission />
   
            <Card>
   
               <Card.Title>
                  <Text>
                     Community Partners
                  </Text>
                  
                  <Card.Divider>
                     <Loading/>
                  </Card.Divider>
                  
               </Card.Title>
   
   
              
            
            </Card>
            </Animatable.View>
         </ScrollView>
      )
   }

   if (partners.errMess) {
      return (
         <ScrollView>
            
            <Mission />
   
            <Card>
   
               <Card.Title>
                  <Text>
                     Community Partners
                  </Text>
                  
                  <Card.Divider>
                     <Text>{partners.errMess}</Text>
                  </Card.Divider>
                  
               </Card.Title>
   
   
              
            
            </Card>
            
         </ScrollView>
         
      )
   }





   return (
      <ScrollView>
          <Animatable.View
               animation={'fadeInDown'}
               duration={1500}
            delay={1300}>
         <Mission />

         <Card>

            <Card.Title>
            <Text>
            Community Partners
               </Text>
               

               
            </Card.Title>


            {partners.partnersArray.map(partner => {
               return (
                  <>
                     <ListItem>
                        <Avatar
                           source={{ uri: baseUrl + partner.image }}
                           rounded />
                     {/* </ListItem> */}
                        
                     <ListItem.Content>
                        <View>
                        <ListItem.Title>
                           {/* <Text> */}
                           {partner.name}
                           {/* </Text> */}
                        </ListItem.Title>

                        <ListItem.Subtitle>
                           {/* <Text> */}
                              {partner.description}
                           {/* </Text> */}
                        </ListItem.Subtitle>
                        </View>
                     </ListItem.Content>
                     </ListItem>
                  </>
               )
            })}
         </Card>
         </Animatable.View>
      </ScrollView>
   ); 
};

export default AboutScreen;