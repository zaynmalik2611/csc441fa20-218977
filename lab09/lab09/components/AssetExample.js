import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        My name is Zain Ul Abideen. I am an aspiring web developer and designer.
        I like making web apps and real-life problem-solving through them.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
