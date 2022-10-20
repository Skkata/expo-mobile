/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { ProfileStackParamList, RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';
import ShopsScreen from '../screens/ShopsScren';
import CartSVGIcon from '../assets/icons/Cart_alt.svg';
import HomeSVGIcon from '../assets/icons/Home_alt.svg';
import LocationSVGIcon from '../assets/icons/Location.svg';
import ProfileSVGIcon from '../assets/icons/User_male_circle.svg';
import CoinsSVGIcon from '../assets/icons/Coins.svg';
import MenuSVGIcon from '../assets/icons/Circle_menu.svg';
import ProfileScreen from '../screens/screensProfile/ProfileScreen';
import OrderScreen from '../screens/OrderScreen';
import EditProfileScreen from '../screens/screensProfile/MyCityScreen';
import MyCityScreen from '../screens/screensProfile/MyCityScreen';
import PromocodeScreen from '../screens/screensProfile/PromocodeScreen';
import MessageScreen from '../screens/screensProfile/MessageScreen';
import HistoryScreen from '../screens/screensProfile/HistoryScreen';
import ApplicationScreen from '../screens/screensProfile/ApplicationScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const containerRef = useNavigationContainerRef()
  return (
    <NavigationContainer
      ref={containerRef}
      linking={LinkingConfiguration}>
      <RootNavigator />
      {/* <ProfileNavigator/> */}
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Root' component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='Profile' component={ProfileNavigator} options={{headerShown: false}} />
      <Stack.Screen name='NotFound' component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
const StackProfile = createNativeStackNavigator<ProfileStackParamList>();

function ProfileNavigator(){
  return(
    <StackProfile.Navigator>
      <StackProfile.Screen name='EditProfile' component={EditProfileScreen}/>
      <StackProfile.Screen name='MyCity' component={MyCityScreen}/>
      <StackProfile.Screen name='Promocode' component={PromocodeScreen}/>
      <StackProfile.Screen name='Message' component={MessageScreen}/>
      <StackProfile.Screen name='Orders' component={OrderScreen}/>
      <StackProfile.Screen name='History' component={HistoryScreen}/>
      <StackProfile.Screen name='Application' component={ApplicationScreen}/>
    </StackProfile.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();
const iconSize = {
  width: 18,
  height: 18,
}
function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 56
        }
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'ГЛАВНАЯ',
          tabBarIcon: () => <HomeSVGIcon width={iconSize.width} height={iconSize.width} />,
        }}
      />
      <BottomTab.Screen
        name="Shops"
        component={ShopsScreen}
        options={({ navigation }: RootTabScreenProps<'Shops'>) => ({
          title: 'ПИЦЕРИИ',
          tabBarIcon: () => <LocationSVGIcon width={iconSize.width} height={iconSize.height} />,
        })}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'КОРЗИНА',
          tabBarIcon: () => {
            return (
              <>
                <Text style={{
                  position: 'absolute',
                  fontSize: 8,
                  top: 30,
                }}>1200</Text>
                <CartSVGIcon width={iconSize.width} height={iconSize.width} />
              </>
            )
          }
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: 'ПРОФИЛЬ',
          tabBarIcon: () => <ProfileSVGIcon width={iconSize.width} height={iconSize.height} />
        }}
      />
      <BottomTab.Screen
        name='More'
        component={OrderScreen}
        options={{
          title: 'Еще',
          tabBarIcon: () => <MenuSVGIcon width={iconSize.width} height={iconSize.height} />
        }}
      />
    </BottomTab.Navigator>
  );
}
