import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';
import Header from './components/header';
import { Card } from 'react-native-paper';

export default function App() {
  return (
      <>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.paragraph}>
          <AssetExample />
        </View>
        <View style={styles.social}>
          <AntDesign name="twitter" size={28} color="black" />
          <AntDesign name="facebook-square" size={28} color="black" />
          <AntDesign name="linkedin-square" size={28} color="black" />
          <AntDesign name="instagram" size={28} color="black" />
          <AntDesign name="youtube" size={28} color="black" />
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 24,
  },
  paragraph: {
    flex: 1,
  },
  social: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
