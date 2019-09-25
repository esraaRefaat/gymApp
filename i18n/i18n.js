import I18n from 'react-native-i18n';
import en from './locales/en';
import ar from './locales/ar';
import {  AsyncStorage } from 'react-native';

I18n.fallbacks = true;
AsyncStorage.getItem('settings.language')
.then(value => {
  if (value) {
    I18n .locale = value
  } else {
    // initialize app with default locale
    DangerZone.Localization.getCurrentLocaleAsync().then(res => {
      const language = res.split("_")[0]
   if(language == 'ar'){
    I18n .locale = 'ar'
    AsyncStorage.setItem('settings.language', 'ar')
   }
   else{
    I18n .locale = 'en'
    AsyncStorage.setItem('settings.language', 'en')
  
   }
      console.log(res.split("_")[0])
  //  AsyncStorage.setItem('settings.language', 'en').then(()=>console.log(getLangSettings()))
  })

   }} )
.catch(() => (I18n .locale = 'ar'))
I18n.translations = {
  en,
  ar
};
 
export default I18n;
