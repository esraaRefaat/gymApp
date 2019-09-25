import React, { Component} from 'react'
import { StyleSheet, FlatList,View} from 'react-native';
import { Container, Header, Content,Footer, FooterTab, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';


export default class Myproject extends Component {
  static navigationOptions = {
    header:null
  }
  constructor(props)
  {
    super(props);
 
    this.state = { FlatListItems: [
     
      {key: require( './images/set-cartoon-healthy-food-vegetables-design-vector-10586071.jpg')},
      {key:require( './images/hand-drawn-healthy-food-background_23-2148149084.jpg')},
      {key: require('./images/cute-cartoon-fruits-healthy-food-vector-4058686.jpg')},
      {key: require( './images/65980258-healthy-food-set-vegetables-fruit-meal-on-the-table-cartoon-flat-style-vector-illustration.jpg')},
      {key: require('./images/set-cartoon-healthy-food-vegetables-design-vector-10586071.jpg')},
      {key: require( './images/hand-drawn-healthy-food-background_23-2148149084.jpg')},
      {key: require('./images/cute-cartoon-fruits-healthy-food-vector-4058686.jpg')},
      {key: require( './images/65980258-healthy-food-set-vegetables-fruit-meal-on-the-table-cartoon-flat-style-vector-illustration.jpg')},
 
      

    ]}
  }
 
FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#99ccff",
        }}
      />
    );
  }
 
 
  handleLoadMore = () => {
    this.setState({
      FlatListItems: 
  
      this.state.FlatListItems.concat( {key: require('./images/set-cartoon-healthy-food-vegetables-design-vector-10586071.jpg')},
    )

    })
  }
 
  render() {
    return (
 
<View style={styles.MainContainer}>
  
       <FlatList
       
          data={ this.state.FlatListItems }
          
          ItemSeparatorComponent = {this.FlatListItemSeparator}
 
          renderItem={({item}) => 
        
          <List>
          <ListItem thumbnail>
            <Left>
            <Thumbnail square large source={item.key} />
            </Left>
            <Body>
              <Text note >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
            </Body>
            
          </ListItem>
          </List>
          }
         
          onEndReachedThreshold={0.5}
         onEndReached={this.handleLoadMore}
        />
    
    
</View>
            
    );
  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
justifyContent: 'center',
flex:1,
margin: 15,

 
},

item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
 
});
 