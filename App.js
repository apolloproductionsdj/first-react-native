import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Todo from './Todo';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titleText}>Let's build a React Native App in One Day 🚀 🙂 🚢  </Text>
      </View>
      <Todo title="Take the trash out" />
      <Todo title="Code React Native TinDev App" />
      <Todo title="Eat, Code, Sleep" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    backgroundColor: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;