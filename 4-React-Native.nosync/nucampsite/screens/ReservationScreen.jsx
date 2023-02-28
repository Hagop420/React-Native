import { useState } from "react";
import {
   Text,
   View, ScrollView,
   Stylesheet,
   Switch,
   Button
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker'

const ReservationScreen = () => {
   const [campers, setCampers] = useState(1);
   const [hikeIn, setHikeIn] = useState(false);
   const [date, setDate] = useState(new Date());
   const [showCal, setShowCal] = useState(false)
// event handler
   const handleRes = () => {
      console.log('campers' , campers);
      console.log('hikeIn' , hikeIn);
      console.log('date' , date);
      setCampers(1)
      setHikeIn(false)
      setDate(new Date())
      setShowCal(fasle)

      return (
         <ScrollView>
            <View style={styles.formRow}>
               <Text style={styles.formLabel}>
                  Number of Campers:

                  <Picker
                     style={styles.formItem}
                     selectedValue={campers}
                     onValueChange={(item) => setCampers(item)}

                  >

                     <Picker.Item
                       label="1" 
                       value={1}
                      
                     />
                     <Picker.Item
                       label="2" 
                       value={2}
                      
                     />
                     <Picker.Item
                       label="3" 
                       value={3}
                      
                     />
                     <Picker.Item
                       label="4" 
                       value={4}
                      
                     />
                     <Picker.Item
                       label="5" 
                       value={5}
                      
                     />
                     <Picker.Item
                       label="6" 
                       value={6}
                      
                     />

                   


                  </Picker>
               </Text>
            </View>

            <View style={styles.formRow}>
               <Text style={styles.formLabel}>
                     Hike in?
                  <Switch
                     style={styles.formItem}
                     value={hikeIn}
                     trackColor={{
                        true: 'blue', false: null
                     }}
                     onValueChange={(value) => setHikeIn(value)} />
            </View>

            <View style={styles.formRow}>
               <Text style={styles.formLabel}>
                  Date:
               </Text>
            </View>
         </ScrollView>
      )
   }

   return (
      <>

      </>
   )
}

export default ReservationScreen
