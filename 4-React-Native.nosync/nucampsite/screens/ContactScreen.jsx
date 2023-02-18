import { Card,Text } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"

const ContactScreen = () => {
   return(
   <ScrollView>
      <Card
      wrapperStyle={{margin: 10}}>
         <Card.Title>
         <Text>Contact Information</Text>
         </Card.Title>
         <Card.Divider />
         <Text>
         1 Nucamp Way
         Seattle, WA 98001 
         </Text>

         <Text style={{marginBottom: 10}}>
         U.S.A.
         </Text>


         <Text>
           Phone: 1-206-555-1234
         </Text>


         <Text>
            Email: campsites@nucamp.co
         </Text>
      </Card>
      </ScrollView>
   )
}


export default ContactScreen