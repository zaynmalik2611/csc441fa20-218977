import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Content from './components/Content';
import Table from './components/Table';
export default function App() {
  return (
    <>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.content}>
        <Content />
      </View>
      <View style={styles.table}>
        <Table />
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 24,
  },
  content: {
    flex: 1,
  },
  table: {
    flex: 1,
    padding: 15,
  }
});
