import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { deleteEvent } from './api';

export default function EventDetails({route, navigation}){
    const {title} = route.params;
    const {date} = route.params;
    const {id} = route.params;
       
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{'ID: ' + JSON.stringify(id)}</Text>
            <Text>{JSON.stringify(title)}</Text>
            <Text>{JSON.stringify(date.toString())}</Text>                
            <Button
                key="deleteButton"
                title="Eliminar"
                onPress={() => deleteEvent(id).then(navigation.navigate('list'))}
            />
        </View>
    );   
}