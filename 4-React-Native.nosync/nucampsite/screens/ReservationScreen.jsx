import { useState } from "react";
import {
   Text,
   View,
   ScrollView,
   StyleSheet,
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

   const onDateChange = (event, selectedDate) => {
      const currentDate = selectedDate || date
      setShowCal(currentDate)
   }

   const handleRes = () => {
      console.log('campers:' , campers);
      console.log('hikeIn:' , hikeIn);
      console.log('date:' , date);
      setCampers(1)
      setHikeIn(false)
      setDate(new Date())
      setShowCal(false)
   }

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
                  trackColor={{ true: 'blue', false: null }}
                  onValueChange={(value) => setHikeIn(value)}
               />
            </Text>
         </View>

         <View style={styles.formRow}>
            <Text style={styles.formLabel}>
               Date:
            </Text>
            <Button
               onPress={() => setShowCal(!showCal)}
               title={date.toLocaleDateString('en-US')}
               color='blue'
               accessibilityLabel="Tap on me to select a Resetrvation date"
            />
         </View>

         {showCal && (
            <DateTimePicker
               style={styles.formItem}
               value={date}
               mode='date'
               display='default'
               onChange={onDateChange}
            />
         )}

         <View style={styles.formRow}>
            <Button
               onPress={() => handleRes()}
               title='Search'
               style={{ backgroundColor: 'blue' }}
               color='blue'
               accessibilityLabel="Blindness accesibillity Features"
            />
         </View>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   formRow: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      margin: 20
   },
   formLabel: {
      fontSize: 18,
      flex: 2
   },
   formItem: {
      flex: 1
   }
});

export default ReservationScreen
