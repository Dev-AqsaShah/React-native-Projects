// src/navigation/MainTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens: make sure these files exist and default-export a React component
import Profile from '../screens/Profile';
import Products from '../screens/Products';
import Orders from '../screens/Order';
import About from '../screens/About';
import ContactUs from '../screens/Contact';

// Quick any-cast to avoid TypeScript overload checks that cause the error
const Tab: any = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Products"
      // using `any` here to avoid TS overload problems
      screenOptions={({ route }: any) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0.5,
          borderTopColor: '#ddd',
          height: 60,
          paddingBottom: 6,
        },
        tabBarIcon: ({ color, size }: any) => {
          let iconName: any = 'ellipse';
          if (route.name === 'Profile') iconName = 'person-outline';
          else if (route.name === 'Products') iconName = 'pricetags-outline';
          else if (route.name === 'Orders') iconName = 'cart-outline';
          else if (route.name === 'About') iconName = 'information-circle-outline';
          else if (route.name === 'ContactUs') iconName = 'call-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Profile" component={Profile as any} />
      <Tab.Screen name="Products" component={Products as any} />
      <Tab.Screen name="Orders" component={Orders as any} />
      <Tab.Screen name="About" component={About as any} />
      <Tab.Screen name="ContactUs" component={ContactUs as any} />
    </Tab.Navigator>
  );
}
