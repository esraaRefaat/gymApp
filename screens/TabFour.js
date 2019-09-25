import React, { Component } from 'react';  
import { StyleSheet, View,Linking,TouchableOpacity,Text,WebView } from 'react-native';  
import MapView from 'react-native-maps';  

export default class TabFour extends Component {  

  //urlMap(){ Linking.openURL('https://google.com') }
  static navigationOptions = {
    header:null
  }
  render() {  
   // const url='https://google.com'

    return (  
    <View style={styles.MainContainer}>
    <WebView />
         <MapView
        style={styles.mapStyle}
        region={{
          latitude:30.0647469,
          longitude:31.3357511,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
        
      >
       <MapView.Marker
            coordinate={{latitude:30.0647469,
            longitude:31.3357511}}
            title={"Gold's Gym (Ladies)"}           
        >
           
           <MapView.Callout>
             <View>
        <TouchableOpacity
          onPress={()=>{Linking.openURL('https://goo.gl/maps/xTxfxuEXGEEpPWtj9')}}
        >
          <Text>
           Gold's Gym (Ladies)
          </Text>
        </TouchableOpacity>
      </View>
      </MapView.Callout>
</MapView.Marker>
        
      </MapView>
       </View> 
     
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  MainContainer: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
    alignItems: 'center',  
    justifyContent: 'flex-end',  
  },  
  mapStyle: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
  },  
});  