import { StatusBar } from 'expo-status-bar';
import React from "react";
import { 
  Alert,
  Button, 
  StyleSheet, 
  Text, 
  TextInput,
  SafeAreaView,
  View } from 'react-native';

  let OpenAlert=()=>{
    Alert.alert(
      'Hey There!', 'Three button alert dialog'
    );
  }
  let d = (x) => {
  console.log(x)
  }
export default function App() {
  const [text1, fn1] = React.useState('1');
  const [text2, fn2] = React.useState("2")
  const [text3, fn3] = React.useState(1)

  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      onChangeText={(p)=>fn1(p+"hi")}
      value= {text1}
      />
      <TextInput 
      onChangeText={(p)=>fn2(p+"x")}
      style={styles.input}
      value= {text2}
      />
      <Button 
      title= "click"
      onPress={()=>d(text1)}
/>
         </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
},
}
);
