import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Lista from './EventList';
import { YellowBox } from 'react-native';
import events from './db.json'

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Soy el JSON</h1>
        {events.map((detalle, id)=>{
        return( <h1>{detalle.title}{detalle.date}</h1>)
        
          
        })}
      </div>
    );
  }
}
