import { Image, Platform, StyleSheet, Text, View, Aelrt, ToastAndroid, Alert } from 'react-native';
import Constants from 'expo-constants';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import DirectoryScreen from './DirectoryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen from './FavoritesScreen';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import { Icon } from 'react-native-elements';
import logo from '../assets/images/logo.png';
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { fetchPartners } from '../features/partners/partnersSlice';
import { fetchCampsites } from '../features/campsites/campsitesSlice';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import { fetchPromotions } from '../features/promotions/promotionsSlice';
import { fetchComments } from '../features/comments/commentsSlice';
import NetInfo from '@react-native-community/netinfo'
import ReservationScreen from './ReservationScreen';
import * as Animatable from 'react-native-animatable'







const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

// for login screen
const LoginNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={({ navigation, route }) => ({
                    headerTitle:getFocusedRouteNameFromRoute(route),
                    headerLeft: () => (
                        <Icon
                            name={
                                getFocusedRouteNameFromRoute(route) === 'Register' ?
                                    'user-plus'
                                    : 'sign-in'
                            }
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};
// end login screen

const AboutNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='About'
                component={AboutScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name='info-circle'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={({ navigation }) => ({
                    title: 'Contact Us',
                    headerLeft: () => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

// Reservation navigator


const ResNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Reservation'
                component={ReservationScreen}
                options={({ navigation }) => ({
                    title: 'Make a Reservation',
                    headerLeft: () => (
                        <Icon
                            name='tree'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

// favorites nacigator

const favNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Favorites'
                component={FavoritesScreen}
                options={({ navigation }) => ({
                    title: 'Favorite Campsites',
                    headerLeft: () => (
                        <Icon
                            name='heart'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

// end fav navigator

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={({ navigation }) => ({
                    title: 'Campsite Directory',
                    headerLeft: () => (
                        <Icon
                            name='list'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen
                name='CampsiteInfo'
                component={CampsiteInfoScreen}
                options={({ route }) => ({
                    title: route.params.campsite.name
                })}
            />
        </Stack.Navigator>
    );
};

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
                <Image source={logo} style={styles.drawerImage} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.drawerHeaderText}>NuCamp</Text>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
    </DrawerContentScrollView>
);

const Main = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites())
        dispatch(fetchPromotions())
        dispatch(fetchPartners())
        dispatch(fetchComments())
    }, [dispatch])


    
    useEffect(() => {
       //network 
        NetInfo.fetch()
            .then((connectInfo) => {
           Platform.OS === 'ios'
               ? Alert.alert(`Network Connectivity type: ${connectInfo.type}`) : ToastAndroid.show(
                `Network Connectivity type: ${connectInfo.type} ${ToastAndroid.LONG}`
               )
       })
        // subscribe to net chges

        const unSubNetInfo = NetInfo.addEventListener(
            (connectInfo) => {
                handleConnectChg(connectInfo)
                }
        )
        return unSubNetInfo
    }, [])

    
    
    const showNetInfo = async () => {
        const connectInfo = await NetInfo.fetch();
        Platform.OS === 'ios'
          ? Alert.alert(`Network Connectivity type: ${connectInfo.type}`)
          : ToastAndroid.show(
              `Network Connectivity type: ${connectInfo.type} ${ToastAndroid.LONG}`
            );
      
        const unSubNetInfo = NetInfo.addEventListener((connectInfo) => {
          handleConnectChg(connectInfo);
        });
        return unSubNetInfo;
      };
      
      useEffect(() => {
        showNetInfo();
      
        return () => {
          NetInfo.removeEventListener(unSubNetInfo);
        };
      }, []);
      

    const handleConnectChg = (connectionInfo) => {
        let connInfo = `You are now connected to an active network`
        
        switch (connectionInfo.type) {
            case 'none':
                connInfo = 'No network connection is active.';
                break;
            case 'unknown':
                connInfo = 'The network connection state is now unknown.';
                break;
            case 'cellular':
                connInfo = 'You are now connected to a cellular network.';
                break;
            case 'wifi':
                connInfo = 'You are now connected to a WiFi network.';
                break;
        }

        if (Platform.OS === 'ios') {
            Alert.alert('Connection change:', connInfo);
          } else {
            ToastAndroid.show(connInfo, ToastAndroid.LONG);
          }
          
        }

    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerContent={CustomDrawerContent}
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen
                    name='Login'
                    component={LoginNavigator}
                    options={{
                        title: 'Login',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='sign-in'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{
                        title: 'Campsite Directory',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='list'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='About'
                    component={AboutNavigator}
                    options={{
                        title: 'About',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='info-circle'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{
                        title: 'Contact Us',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='address-card'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />



                {/* reservation screen drawer screen */}
                <Drawer.Screen
    name='ReserveCampsite'
    component={ResNavigator}
    options={{
        title: 'Reserve Campsite',
        drawerIcon: ({ color }) => (
            <Icon
                name='tree'
                type='font-awesome'
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
            />
        )
    }}
/>
                {/* end reservation navigar drawer */}


                {/* Favorites */}

                <Drawer.Screen
    name='Favorites'
    component={favNavigator}
    options={{
        title: 'Favorite Campsites',
        drawerIcon: ({ color }) => (
            <Icon
                name='heart'
                type='font-awesome'
                size={24}
                iconStyle={{ width: 24 }}
                color={color}
            />
        )
    }}
                />
                
                {/* end favorites */}
            </Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;