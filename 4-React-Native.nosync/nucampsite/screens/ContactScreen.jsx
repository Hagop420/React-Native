import { Card,Text, button, Icon, Button } from "react-native-elements"
import * as MailComposer from 'expo-mail-composer'
import { ScrollView } from "react-native-gesture-handler"
import * as Animatable from 'react-native-animatable'


const ContactScreen = () => {
   const sendMail = () => {
      MailComposer.composeAsync({
         recipients: ['campsites@nucamp.co'],
         subject: 'Inquiry',
         body:'To who it may concern'
      })
   }
   return(
      <Animatable.View
      animation={'fadeInUp'}
      duration={1000}
   delay={500}>
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
               <Button
                  title='Send Email'
                  buttonStyle={{ backgroundColor: 'blue', margin: 40, borderRadius:5, 
                  }}
                  
                  icon={
                     <Icon
                        name='envelope'
                        type='font-awesome'
                        color='#fff'
                        iconStyle={{marginRight:10}}
                     />
                     
                  }
                  onPress={() => sendMail()}
              />
      </Card>
      
      </ScrollView>
      </Animatable.View>
   )
}


export default ContactScreen