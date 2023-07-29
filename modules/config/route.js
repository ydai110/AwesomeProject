import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// 引入页面组件
import ScreenHome from '../screens/ScreenHome';
import ScreenSome1 from '../screens/ScreenSome1';
import ScreenTab1 from '../screens/ScreenTab1';
import ScreenTab2 from '../screens/ScreenTab2';
import {View, Text, Image, Button} from 'react-native';
import {Icon} from 'react-native-vector-icons';

// 配置路由
// const AppNavigator = StackNavigator({
//   ScreenHome: {
//     screen: ScreenHome,
//   },
//   ScreenSome1: {
//     screen: ScreenSome1,
//   },
// });

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Stack.Navigator
      initialRouteName="ScreenHome"
      screenOptions={{
        headerStyle: {backgroundColor: '#f4511e'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="ScreenHome"
        component={ScreenHome}
        options={{
          headerRight: () => (
            <Button title="Update Count" backgroundColor="#fff" />
          ),
        }}
      />
      <Stack.Screen
        name="ScreenSome1"
        component={ScreenSome1}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
}

function Tab1() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#f4511e'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="ScreenTab"
        component={ScreenTab1}
        options={{
          headerRight: () => (
            <Button title="Update Count" backgroundColor="#fff" />
          ),
        }}
      />
      <Stack.Screen
        name="ScreenSome"
        component={ScreenSome1}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
}

function Tab2() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#f4511e'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="ScreenTab"
        component={ScreenTab2}
        options={{
          headerRight: () => (
            <Button title="Update Count" backgroundColor="#fff" />
          ),
        }}
      />
      <Stack.Screen
        name="ScreenSome"
        component={ScreenSome1}
        options={({route}) => ({title: route.params.name})}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          const icon = focused
            ? require('../assets/tab_home_active.png')
            : require('../assets/tab_home.png');
          return <Image source={icon} style={{height: 22, width: 22}} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} options={{tabBarBadge: 3}} />
      <Tab.Screen name="ScreenTab1" component={Tab1} />
      <Tab.Screen name="ScreenTab2" component={Tab2} />
    </Tab.Navigator>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('../assets/tab_home_active.png')}
    />
  );
}

export default () => <AppNavigator />;
