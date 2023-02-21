import { Card,Text,ListItem,Avatar } from "react-native-elements"
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler"
import { PARTNERS } from "../shared/partners"


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
   return (
      <ScrollView>
         <Mission />

         <Card>

            <Card.Title>
            <Text>
            Community Partners
               </Text>
               

               
            </Card.Title>


            <Card.Divider>

            </Card.Divider>

            {PARTNERS.map(partner => {
               return (
                  <>
                     <ListItem>
                        <Avatar key={partner.id} source={partner.image} rounded/>
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
      </ScrollView>
   ); 
};

export default AboutScreen;