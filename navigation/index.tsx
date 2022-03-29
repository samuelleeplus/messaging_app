/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, TouchableWithoutFeedback } from 'react-native';

import { View } from "react-native";
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { TabBarIndicator } from 'react-native-tab-view';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
// Check here for icons ---> https://icons.expo.fyi/

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  const navigation = useNavigation(); 
  
  const onPress= () => {
    navigation.navigate("Contacts");
  }

  return (

    // screen header bar editing -> color
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: Colors.light.tint, 
      }, 
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20
      }
    }
    }>
      {/* this is the header settings with name, write new message icon,   */}
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ 
        headerShown: true, 
        title: "Falcon", 
        headerRight: ()=>(
          <Pressable
          onPress={() => navigation.navigate('Contacts')}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}>
              <SimpleLineIcons name="note" size={24} color="black"/>
          </Pressable>


      )
    
    }} />
    <Stack.Screen 
      name="ChatRoom" 
      component={ChatRoomScreen} 
      options={({route}) => ({
        title: route.params.firstName,  
        headerRight:() => (
        // <TouchableWithoutFeedback onPress={onClick}>
                <View style= {{
                  flexDirection :"row",
                  width : 90,
                  justifyContent: "space-between",
                  marginRight:5
                }
                }>
                  <FontAwesome5 name = "video" size= {22} color= {'white'}/>
                  <MaterialIcons name = "call" size= {22} color= {'white'}/>
                  <MaterialCommunityIcons name = "dots-vertical" size= {22} color= {'white'}/>
                </View>
          // </TouchableWithoutFeedback>
        )
      })} 
    />
      <Stack.Screen name="Contacts" component={ContactsScreen} options={{ title: 'Write New Message' }} />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Messages"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background, 
        tabBarStyle:{
          backgroundColor: Colors[colorScheme].tint,
          
        }
        
        
      }
      

      }>
      <BottomTab.Screen
      // name must be edited in types.tsx file
        name="Messages" 
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'Messages'>) => ({
          title: 'Messages',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="message-bulleted" size={24} color="white" />,
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate('Modal')}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}>
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      />
      {/* <BottomTab.Screen
        name="Calls"
        component={TabTwoScreen}
        options= {({navigation}: RootTabScreenProps<'Calls'>) => ({
          title: 'Calls',
          tabBarIcon: ({ color }) => <MaterialIcons name="call" size={30} color="white" />,
          headerRight:()=>(
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>


          )
        })}
      /> */}
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
