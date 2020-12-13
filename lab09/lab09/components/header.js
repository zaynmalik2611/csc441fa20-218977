import * as React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

export default function Header() {
  return (
    <View>
      <Image source={require('../assets/2.png')} style={styles.headerImage}/>
    </View>
  );
}
const styles = StyleSheet.create({  
  headerImage: {
    width: 412,
    height : 200,
  }
});
