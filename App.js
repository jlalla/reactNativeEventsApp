import React from 'react';
import EventList from './EventList';
import EventForm from './EventForm';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="list"
          component={EventList}
          options={{title: 'Eventos'}}
        />
        <Stack.Screen 
          name="form" 
          component={EventForm}
          options={{title: 'Evento'}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}