import React, { Component } from 'react';
import { FlatList, StyleSheet, Button } from 'react-native';
import EventCard from './EventCard';
import { getEvents } from './api';

const styles = StyleSheet.create({
    list: {
        //flex: 1,        
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
});

export default class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount(){        
        setInterval(() => {            
            //update countdown
            this.setState({
                events: this.state.events.map(
                    evt => ({...evt, timer: Date.now() }))
            });}, 1000);
            
        /*const events = require('./db.json').events;*/
        /* por un tema de fechas y strings */ 
        /*const events = require('./db.json').events.map(
            e=>({...e, date: new Date(e.date)})
        );*/

        //load events when navigate to this screen        
        this.props.navigation.addListener('focus', () =>{
            debugger;
            //get events from WEB API
            getEvents().then(events => this.setState({ events }));            
        });                        
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    };

    render(){
        return([
            <FlatList 
                key="flatList"
                style={styles.list}
                data={this.state.events}
                renderItem={({item}) => <EventCard event={item} />}
                keyExtractor = {item => item.id}
            />,
            <Button
                key="addButton"
                title="Agregar"
                onPress={this.handleAddEvent}
            />
        ]);
    }
}
