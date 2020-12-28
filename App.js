import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Todo from './Todo';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([input, ...todos]);
    setInput('');
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titleText}>Let's build a React Native App in One Day 🚀 🙂 🚢  </Text>
      </View>
      <ScrollView>
        {todos.map((todo) => (
          <Todo title={todo} />
        ))}
      </ScrollView>
      <TextInput
        style={styles.todoInput}
        value={input}
        onChangeText={text => setInput(text)}
      />
      <Button onPress={addTodo} title="ADD TODO" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todoInput: {
    margin: 20,
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  },
  titleText: {
    backgroundColor: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;