import React , {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform, 
  SafeAreaView,
  StatusBar,
} from 'react-native';


import Focus from './src/features/Focus'

import {colors} from "./src/utils/colors"


export default function App() {

  const [subject, setSubject] = useState('')


  const addMainSubject = (subject) => {
        setSubject(subject)
  }

  return (
    <SafeAreaView style={styles.container}>
    {
      subject ?  <Text style={styles.textStyle}>{subject}</Text> : <Focus addSubject={addMainSubject} /> 
    }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    backgroundColor:colors.bgDark,
    paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  textStyle : {
    color:'white',
    fontSize:100,
    fontWeight:7000
  }
});
