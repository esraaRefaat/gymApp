import React, { Component} from 'react'
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native-animatable'
import createReactClass from 'create-react-class'
import CustomButton from '../../components/CustomButton'
import metrics from '../../config/metrics'
import I18n from '../../../i18n/i18n';
export default class Opening extends Component {
  static navigationOptions = {
    header:null
  }
  static propTypes = {
    onCreateAccountPress: PropTypes.func.isRequired,
    onSignInPress: PropTypes.func.isRequired
  }

  render () {
    return (
      <View style={styles.container}>
    
        <View animation={'zoomIn'} delay={800} duration={400}>
          <CustomButton
            text={I18n.t('greeting')}
            onPress={this.props.onSignInPress}
            buttonStyle={styles.signInButton}
            textStyle={styles.signInButtonText}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: metrics.DEVICE_WIDTH * 0.1,
    justifyContent: 'center'
  },
  createAccountButton: {
    backgroundColor: '#9B9FA4'
  },
  createAccountButtonText: {
    color: 'white'
  },
  separatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20
  },
  separatorLine: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    borderColor: '#9B9FA4'
  },
  separatorOr: {
    color: '#9B9FA4',
    marginHorizontal: 8
  },
  signInButton: {
    backgroundColor: '#3e64ff'
  },
  signInButtonText: {
    color: 'white'
  }
})
