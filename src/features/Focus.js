import React, {useState} from 'react'
import {View, Text, StyleSheet,Button} from 'react-native'
import {TextInput} from 'react-native-paper'
import RoundedButton from '../components/RoundedButton'


const Focus = ({addSubject}) => {
    const [textFocus, setTextFocus] = useState('')

    const heyThere = () => {
      addSubject(textFocus)
    }


    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
              <TextInput 
              label="What would you like to focus on?"
              value={textFocus} onChangeText={setTextFocus} 
              style={styles.inputText}
              />
              <RoundedButton title="+" size={50} onPress={heyThere} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputText : {
        flex:0.8
    } ,
      inputContainer: {
        flexDirection: 'row',
        padding:30,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20     
        }
})

export default Focus
