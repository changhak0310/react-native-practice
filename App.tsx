import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import { boolean } from 'yargs';
import axios from "axios"

const API_KEY = '1a40683f0a7cb65d091713f939601040';

export default class extends React.Component{
state = {
  isLoading: true
};
getWeather = async(latitude?: number, longitude?: number) => {
  const {data} = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    console.log(data);

};

  getLocation = async() => {
    try{
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      
      this.getWeather(latitude, longitude);
      this.setState({
        isLoading: false
      });
      
    } catch (error){
      Alert.alert("NoNO","So sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render() {
    const {isLoading} = this.state;
    return (
      isLoading ? <Loading/> : null
    );
  }
}

