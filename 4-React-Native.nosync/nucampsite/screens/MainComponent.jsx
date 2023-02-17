import { useState } from 'react';
import { View } from 'react-native';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import { CAMPSITES } from '../shared/campsites'
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
   const [campsites, setCampsites] = useState(CAMPSITES)
   const [selectedCampsiteId, setSelectedCampsiteId]=useState()
   // directoryScreen return here with campsite prop
   return (
      <>
         <View style={{flex:1}}>
         <DirectoryScreen campsites={campsites}
               
               onPress={(camp) => setSelectedCampsiteId(camp)}
            />
            <CampsiteInfoScreen campsite={campsites.filter((camp) =>camp.id===selectedCampsiteId)[0]}
   />
      </View>
      </>
   )
}

export default Main