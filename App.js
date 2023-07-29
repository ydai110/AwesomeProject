import React, {Component} from 'react';
import Route from './modules/config/route';
import {NavigationContainer} from '@react-navigation/native';

export default class App extends Component {
  render() {
    return <NavigationContainer>{<Route />}</NavigationContainer>;
  }
}
