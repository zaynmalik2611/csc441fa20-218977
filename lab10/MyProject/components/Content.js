import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default function Content() {
  return (
    <View style={styles.container}>
      <Text style={styles.TextStyles}>NUST SEECS Cafe</Text>

    </View>
  );
}
const styles = StyleSheet.create({
    container: {
    },
  TextStyles: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  }
});
