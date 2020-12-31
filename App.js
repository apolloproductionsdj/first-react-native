import React, { useEffect, useState } from 'react';
import { Button, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Gig from './Gig';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const App = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [gigs, setGigs] = useState([
    {
      description: "Freelance job with Qazi",
      amount: 499.99,
      timestamp: new Date(),
    },

  ]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(gigs.reduce((total, gig) => total + Number(gig.amount), 0));
  }, [gigs])

  const addGig = () => {
    setGigs([{
      description: description,
      amount: amount,
      timestamp: new Date()
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
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: [new Date(), "Tomorrow"],
            datasets: [
              {
                data: [
                  gigs[0].amount,
                  Math.random() * 100,
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          // yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "green",
            backgroundGradientTo: "blue",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
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