import React, { Component} from 'react'
import { Container, Header, Left, Body, Right, Button, Icon,Text, Segment, Content,Form ,Item,Input,Toast,Label } from 'native-base';
import {  AsyncStorage ,Alert,StyleSheet} from 'react-native';
  import I18n from '../i18n/i18n';
  import firebase from 'react-native-firebase'
 
export default class TabTwo extends Component {
  constructor(props) {
    super(props);
    this.state = { password: ''};
  
}
  static navigationOptions = {
    header:null
  }
  render () {
    const {password} = this.state
    return (

        <Container>
        <Header hasSegment style={styles.background}>
         
          <Body>
            <Segment style={styles.background}>
              <Button first  active 
               onPress={() => {
                   I18n.locale = 'ar'
                   AsyncStorage.setItem('settings.language',  'ar').then(() =>{this.props.navigation.navigate('Tabs')})
                 
             }}><Text>Ar</Text></Button>

              <Button last   onPress={() => {
                   I18n.locale = 'en'
                   AsyncStorage.setItem('settings.language',  I18n.locale).then(() =>{this.props.navigation.navigate('Tabs')})
                 
             }}><Text>En</Text></Button>
            </Segment>
          </Body>
        
        </Header>
        <Content>
        <Form>
           
            <Item floatingLabel >
              <Text onChangeText={pass => this.setState({ password:pass})} > Password</Text>
             
            </Item>
            <Button
            onPress={() =>firebase.auth().currentUser.updatePassword('111111').then(()=>{Alert.alert('the password changed')})}
              style={styles.PasswordBtn}  >
            <Text>{I18n.t('password')}</Text>
          </Button>
          </Form>

        <Button bordered onPress={()=>{
          firebase.auth().signOut().then(()=>{
            this.props.navigation.navigate('Open')
          }
        )
        }}
        style={styles.signOutButton}>
            <Text>{I18n.t('out')}</Text>
          </Button>
          </Content>
        </Container>
    )
  }
}
const styles = StyleSheet.create({
  signOutButton: {
  
    marginTop:90,
    justifyContent: 'center',
    textAlign: 'center',
  },
  background:{
      backgroundColor: '#3e64ff',
     
  },
  PasswordBtn:{
    backgroundColor: '#3e64ff',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop:25
  }
})





















