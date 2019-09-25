import React, {Component} from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text ,List,ListItem,Left,Body,Thumbnail} from 'native-base';
import { StyleSheet } from 'react-native'

export default class FooterTabs extends Component{
    
    static navigationOptions = {
        header:null
      }
    render() {
    return (
      <Container>
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
      <Footer >
        <FooterTab style={styles.container}>
          <Button vertical onPress={()=>{
            this.props.navigation.navigate('One')
          }}>
            <Icon name="home" />
           
          </Button>
          <Button vertical onPress={()=>{
            this.props.navigation.navigate('Three')
          }}>
            <Icon name="bicycle" />
           
          </Button>
          <Button vertical onPress={()=>{
            this.props.navigation.navigate('Four')
          }}>
            <Icon active name="navigate" />
          
          </Button>
          <Button vertical onPress={()=>{
            this.props.navigation.navigate('Two')
          }}>
           <Icon name='cog' />
            
           
          </Button>
        </FooterTab>
      </Footer>
    </Container>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#3e64ff'
      
    }})