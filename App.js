import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Gig from './Gig';

const App = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [gigs, setGigs] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(gigs.reduce((total, gig) => total + Number(gig.amount), 0));
  }, [gigs])

  const addGig = () => {
    setGigs([{
      description: description,
      amount: amount
    }, ...gigs]);

    setDescription('');
    setAmount('');
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titleText}>Let's build a React Native App for Freelance Devs to Track Income 🚀 🚀 🚀  </Text>
      </View>
      <View>
        <Text>Total Income: ${total}</Text>
      </View>



      <TextInput
        style={styles.input}
        value={description}
        placeholder="Enter a description"
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        value={amount}
        keyboardType='numeric'
        placeholder="Enter an amount you made in ($)"
        onChangeText={text => setAmount(text)}
      />
      <Button disabled={!amount && !description} onPress={addGig} title="ADD GIG" />
      {gigs.map(gig => (
        <View>
          <Text><Gig title={gig.description} /></Text>
          <Text><Gig title={gig.amount} /></Text>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  },
  titleText: {
    // backgroundColor: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;