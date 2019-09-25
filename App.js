/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Footertabs from './screens/FooterTabs';
import LoginAnimation from './screens/LoginAnimation';
import TabOne from './screens/TabOne';
import TabTwo from './screens/TabTwo';
import TabThree from './screens/TabThree'
import TabFour from './screens/TabFour'
import Opening from './screens/containers/AuthScreen'
import SplashScreen from 'react-native-splash-screen'
import firebase from 'firebase';
const RootStack = createStackNavigator(
{
Home:LoginAnimation,
Tabs:Footertabs,
One:TabOne,
Two:TabTwo,
Three:TabThree,
Open:Opening,
Four:TabFour

},
{
initialRouteName:'Home'
}

);
const AppContainer = createAppContainer(RootStack);
export default class App extends Component{
  static navigationOptions = {
    header:null
  }
  componentDidMount() {
     SplashScreen.hide();
     firebase.initializeApp({  
        apiKey: "AIzaSyBhc6tQ4wdGfkVIc9W4kxmM4DFN8zBqM9M",
     authDomain: "auth-b4900.firebaseapp.com",
     databaseURL: "https://auth-b4900.firebaseio.com",
     projectId: "auth-b4900",
     storageBucket: "auth-b4900.appspot.com",
     messagingSenderId: "177543328852",
     appId: "1:177543328852:android:a39393099ff068ab"
 });
    
  }
  render() {
    return (
     
        <AppContainer/>
      
    );
  }
}

