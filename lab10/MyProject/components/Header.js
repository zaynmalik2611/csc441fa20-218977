import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default function Header() {
  return (
    <View>
      <Image source={require('../assets/1.jpg')} style={styles.headerImage}/>
    </View>
  );
}
const styles = StyleSheet.create({  
  headerImage: {
    width: 412,
    height : 200,
  }
});
