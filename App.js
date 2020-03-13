import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ProductScreen, TyOrderScreen, CartScreen, ReportScreen, CheckoutScreen, } from './src/tab';
import {IMG} from './src/constants/img'
import { Text, View, Image } from 'react-native';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

function CartStack() {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={CartScreen} options={navOptionHandler}></Stack.Screen>
      <Stack.Screen name="Checkout" component={CheckoutScreen}></Stack.Screen>
      <Stack.Screen name="TyOrder" component={TyOrderScreen} options={{title:"Checkout"}}></Stack.Screen>
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? IMG.ICON_HOME_CL
                : IMG.ICON_HOME_OG;
            } else if (route.name === 'Product') {
              iconName = focused 
              ? IMG.ICON_SHOP_CL 
              : IMG.ICON_SHOP_OG ;
            } else if (route.name === 'Crat') {
              iconName = focused 
              ? IMG.ICON_CART_CL 
              : IMG.ICON_CART_OG ;
            } else if (route.name === 'Report') {
              iconName = focused 
              ? IMG.ICON_GRAPH_CL 
              : IMG.ICON_GRAPH_OG ;
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{width:20,height:20}}
            resizeMode="contain" />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#191970',
          inactiveTintColor: 'gray',
        }}
      >

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Product" component={ProductScreen} />
        <Tab.Screen name="Crat" component={CartStack} />
        <Tab.Screen name="Report" component={ReportScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}