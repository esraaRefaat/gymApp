import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet,Alert,TextInput,TouchableOpacity,Text} from 'react-native'
import { View } from 'react-native-animatable'
import createReactClass from 'create-react-class'
import CustomButton from '../../components/CustomButton'
import CustomTextInput from '../../components/CustomTextInput'
import metrics from '../../config/metrics'
import { withNavigation } from 'react-navigation';
import I18n from '../../../i18n/i18n';
import firebase from 'firebase';

 class LoginForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onLoginPress: PropTypes.func.isRequired,
    onSignupLinkPress: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { email: '', password: ''};
  
}
//Up=()=> {
  
 // firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
   // .then(()=>{this.props.navigation.navigate('Map')
//
  //  })   
  
//}
  hideForm = async () => {
    if (this.buttonRef && this.formRef && this.linkRef) {
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300),
        this.linkRef.fadeOut(300)
      ])
    }
  }

  render () {
    const { email, password } = this.state
    const { isLoading, onSignupLinkPress, onLoginPress } = this.props
   // const isValid = email !== '' && password !== ''
    return (
      <View style={styles.container}>
        <View style={styles.form} ref={(ref) => { this.formRef = ref }}>
        <TextInput 
          placeholder="user@mail.com"
          value={this.state.email}
          secureTextEntry={false}
          onChangeText={email=> this.setState({ email })} 
         
          />
         <TextInput 
          placeholder="password"
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={password => this.setState({ password})} 
        
          />
        </View>
        <View style={styles.footer}>
          <View ref={(ref) => this.buttonRef = ref} animation={'bounceIn'} duration={600} delay={400}>
            <TouchableOpacity
            style={styles.loginButton}
              onPress={
               ()=>{
                this.props.navigation.navigate('map')
               }
                
              }
            >
            <Text  style={styles.loginButtonText}>
             {I18n.t('greeting')}
             </Text>
            </TouchableOpacity>
          </View>
         
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.DEVICE_WIDTH * 0.1,
    backgroundColor: '#4DB6AC'
    
  },
  form: {
    marginTop: 20
  },
  footer: {
    height: 100,
    justifyContent: 'center'
  },
  loginButton: {
    backgroundColor: 'white',
    height: 42,
    borderWidth: 1,
    borderRadius: 3,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)'
   
  },
  loginButtonText: {
    textAlign: 'center',
    fontWeight: '400',
    color: '#4DB6AC'
  },
  
})
export default withNavigation(LoginForm);