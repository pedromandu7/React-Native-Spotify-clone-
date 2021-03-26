/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import 'react-native-gesture-handler';
 import React, {useContext, useEffect, useState} from 'react';
 import {StatusBar, View, Platform} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
 import ThemeContext from '@src/core/context/theme-context';
 import TabNavigation from '@src/core/routes/TabNavigation';
 import DishDetails from '@src/screens/DishDetails';
 import SearchDishes from '@src/screens/SearchDishes';
 import AuthenticationStack from '@src/core/routes/Stacks/AuthenticationStack';
 import {lightTheme, darkTheme} from '@src/styles/theme';
 import AuthContext from '@src/core/context/auth-context';
 import Loading from '@src/screens/Loading/Loading';
 import RequestPermission from '@src/screens/RequestPermission';
 import DishDetailStack from './Stacks/DishDetailStack';
 import AddressStack from './Stacks/AddressStack';
 import CheckoutStack from '@src/core/routes/Stacks/CheckoutStack';
 import PlaceDetailStack from './Stacks/PlaceDetailStack';
 import OrderView from '@src/screens/OrderView';
 
 const RootStack = createStackNavigator();
 
 const RootNavigation = () => {
   const {theme} = useContext(ThemeContext);
   const flex = 1;
   const rootContainerBackgroundColor =
     theme === 'light'
       ? lightTheme.colors.background
       : darkTheme.colors.background;
   const screenOptions =
     Platform.OS === 'ios'
       ? {
           ...TransitionPresets.ModalSlideFromBottomIOS,
         }
       : {
           ...TransitionPresets.FadeFromBottomAndroid,
         };
 
   return (
     <NavigationContainer theme={theme === 'light' ? lightTheme : darkTheme}>
       <View style={{flex, backgroundColor: rootContainerBackgroundColor}}>
         <StatusBar
           backgroundColor={
             theme === 'light'
               ? lightTheme.colors.background
               : darkTheme.colors.background
           }
           barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
         />
         <RootStack.Navigator
           initialRouteName="Loading"
           mode="modal"
           screenOptions={screenOptions}>
           <RootStack.Screen
             name="Loading"
             options={{headerShown: false}}
             component={Loading}
           />
           <RootStack.Screen
             name="RequestPermissionScreen"
             component={RequestPermission}
             options={{
               headerShown: false,
             }}
           />
           <RootStack.Screen
             name="Main"
             options={{
               headerShown: false,
               headerBackTitle: undefined,
               headerBackTitleVisible: false,
             }}
             component={TabNavigation}
           />
           <RootStack.Screen
             options={{
               headerTransparent: true,
               headerStatusBarHeight: 0,
               title: '',
               headerBackTitle: undefined,
               headerBackTitleVisible: false,
               headerLeft: () => {
                 return null;
               },
             }}
             name="Auth"
             component={AuthenticationStack}
           />
           <RootStack.Screen
             options={{
               headerShown: false,
               headerBackTitle: undefined,
               headerBackTitleVisible: false,
             }}
             name="Address"
             component={AddressStack}
           />
           <RootStack.Screen
             options={{
               headerShown: false,
               headerBackTitle: undefined,
               headerBackTitleVisible: false,
             }}
             name="PlaceDetailsScreen"
             component={PlaceDetailStack}
           />
           <RootStack.Screen
             options={{
               headerShown: false,
               headerBackTitle: undefined,
               headerBackTitleVisible: false,
             }}
             name="DishDetailsModal"
             component={DishDetailStack}
           />
           <RootStack.Screen
             options={{
               headerShown: false,
               headerBackTitle: undefined,
               headerBackTitleVisible: false,
             }}
             name="CheckoutScreen"
             component={CheckoutStack}
           />
           <RootStack.Screen
             options={{
               headerShown: false,
               headerBackTitle: undefined,
               headerBackTitleVisible: false,
               cardOverlayEnabled: true,
               cardStyleInterpolator: ({current: {progress}}) => ({
                 cardStyle: {
                   opacity: progress.interpolate({
                     inputRange: [0, 0.5, 0.9, 1],
                     outputRange: [0, 0.25, 0.7, 1],
                   }),
                 },
                 overlayStyle: {
                   opacity: progress.interpolate({
                     inputRange: [0, 1],
                     outputRange: [0, 0.5],
                     extrapolate: 'clamp',
                   }),
                 },
               }),
             }}
             name="SearchDishesModal"
             component={SearchDishes}
           />
           <RootStack.Screen
             options={{
               title: 'Detalhes do pedido',
               headerShown: true,
               headerBackTitle: undefined,
               headerBackTitleVisible: false,
               cardOverlayEnabled: true,
               cardStyleInterpolator: ({current: {progress}}) => ({
                 cardStyle: {
                   opacity: progress.interpolate({
                     inputRange: [0, 0.5, 0.9, 1],
                     outputRange: [0, 0.25, 0.7, 1],
                   }),
                 },
                 overlayStyle: {
                   opacity: progress.interpolate({
                     inputRange: [0, 1],
                     outputRange: [0, 0.5],
                     extrapolate: 'clamp',
                   }),
                 },
               }),
             }}
             name="OrderViewModal"
             component={OrderView}
           />
         </RootStack.Navigator>
       </View>
     </NavigationContainer>
   );
 };
 
 export default RootNavigation;
 