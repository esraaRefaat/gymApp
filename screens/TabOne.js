import React, { Component} from 'react'
import FooterTabs from './FooterTabs'
import { Container, Header, Content,Footer, FooterTab, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { Image } from 'react-native';

export default class TabOne extends Component {
    
  static navigationOptions = {
    header:null
  }
  render () {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
              <Thumbnail square large source={require('./images/4.jpg')} />
              
              </Left>
              <Body>
                <Text>Swimming</Text>
                <Text note >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
              </Body>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
              <Thumbnail square large source={require('./images/330px-Ludovic_and_Lauren_(8425515069).jpg')} />
             
              </Left>
              <Body>
                <Text>Running</Text>
                <Text note >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
              </Body>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
              <Thumbnail square large source={require('./images/download.jpg')} />
             
              </Left>
              <Body>
                <Text>Football</Text>
                <Text note>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
              </Body>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
              <Thumbnail square large source={require('./images/1987WorldCupTrials.jpg')} />
             
              </Left>
              <Body>
                <Text>Walking</Text>
                <Text note >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
              </Body>
              
            </ListItem>
            <ListItem thumbnail>
              <Left>
              <Thumbnail square large source={require('./images/downloadh.jpg')} />
             
              </Left>
              <Body>
                <Text>Basketball</Text>
                <Text note >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
              </Body>
              
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

