import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const [health, setHealth] = useState(100);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.healthBarContainer}>
        <View style={[styles.healthBar, { width: `${health}%` }]} />
      </View>
      <Text style={styles.healthText}>Health: {health}</Text>
      <View style={styles.dominoContainer}>
        <MaterialCommunityIcons name="dice-d6" size={50} />
      </View>
      <View style={styles.handContainer}>
        <TouchableOpacity style={styles.card} />
        <TouchableOpacity style={styles.card} />
        <TouchableOpacity style={styles.card} />
        <TouchableOpacity style={styles.card} />
        <TouchableOpacity style={styles.card} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  healthBarContainer: {
    width: '80%',
    height: 20,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  healthBar: {
    height: '100%',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  healthText: {
    fontSize: 18,
  },
  dominoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  handContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  card: {
    width: 50,
    height: 80,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default App;