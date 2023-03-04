import { useState } from "react";
import {
   Text,
   View,
   ScrollView,
   StyleSheet,
   Switch,
   Button,
   Modal,
   Platform,
   PanResponder,
   Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker'
import * as Animatable from 'react-native-animatable'


const ReservationScreen = () => {
   const [campers, setCampers] = useState(1);
   const [hikeIn, setHikeIn] = useState(false);
   const [date, setDate] = useState(new Date());
   const [showCal, setShowCal] = useState(false)
   const [showModal, setShowModal] = useState(false)

   const onDateChange = (event, selectedDate) => {
      const currentDate = selectedDate || date
      setShowCal(Platform.OS === 'ios')
      setDate(currentDate)
   }

   const handleRes = () => {
      console.log('campers:' , campers);
      console.log('hikeIn:' , hikeIn);
      console.log('date:' , date);
      setShowModal(!showModal)
   }

   const alertSt = () => {
      Alert.alert(
         'Begin Search?',
         `Number of campsites: ${campers} \n Hike in?: ${hikeIn} \n Date: ${new Date().toLocaleDateString()}`,
         [
            {
               text: 'Cancel',
               style: 'cancel',
               onPress:()=> console.log('Cancel Pressed')
            },
            {
               text: 'Ok',
               onPress:()=> console.log('yay')
            }
            
         ],
         {cancelable:false}
      )
   }

   const reset = () => {
      setCampers(1)
      setHikeIn(false)
      setDate(new Date())
      setShowCal(false)
   }

   return (
      <ScrollView>
         <Animatable.View
            animation='zoomIn'
            duration={2000}
            delay={1000}>
         
         <View style={styles.formRow}>
            <Text style={styles.formLabel}>
               Number of Campers:
            </Text>

               <Picker
                  style={styles.formItem}
                  selectedValue={campers}
                  onValueChange={(item) => setCampers(item)}
               >
               <Picker.Item label="1" value={1} />
               <Picker.Item label="2" value={2} />
               <Picker.Item label="3" value={3} />
               <Picker.Item label="4" value={4} />
               <Picker.Item label="5" value={5} />
               <Picker.Item label="6" value={6} />
               </Picker>
            
         </View>

         <View style={styles.formRow}>
            <Text style={styles.formLabel}>
               Hike in?
               </Text>
               <Switch
                  style={styles.formItem}
                  value={hikeIn}
                  trackColor={{ true: 'blue', false: null }}
                  onValueChange={(value) => setHikeIn(value)}
               />
           
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

         <View
            style={{
               alignItems: 'center',
            justifyContent: 'center',
               flex: 1,
               flexDirection: 'row',
               borderRadius:20,
               backgroundColor:'blue',
               margin: 20}}>
            <Button
               onPress={() => alertSt()}
               title='Search'
               color='#fff'
               accessibilityLabel="Tap me to select a reservation date'"
            />
         </View>
         <Modal
            animationType='fade'
            transparent={false}
            visible={showModal}
            onRequestClose={() => setShowModal(!showModal)}
            >
           
            <View
               style=
               {{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  textAlign:'center',
                  flexDirection: 'column',
                  margin: 20}}>
         <View style={styles.modal} >
            <Text style={styles.modalTitle}>
               Search Reservations
            </Text>
            <Text style={styles.modalText}>
               Numebr of campers selected: {campers}
            </Text>
            <Text style={styles.modalText}>
               hike in picked: {hikeIn ? 'Yes' : 'No'}
            </Text>
            <Text style={styles.modalText}>
               Date: {date.toLocaleDateString('en-US')}
                  </Text>
                  </View>

            <Button
               onPress={() => {
                  setShowModal(!showModal)
                  reset()
               }}
               color='blue'
               title="Close"/>
            
            </View>
            </Modal>
        </Animatable.View>
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
   },
   modal: {
      justifyContent: 'center',
      margin: 20,
   },
   modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      backgroundColor: 'blue',
      textAlign: 'center',
      marginBottom: 20,
      color:'#fff',
   },
   modalText: {
      fontSize: 18,
      margin: 10
  }
});

export default ReservationScreen
