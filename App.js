import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Color dasdqwe</Text>
=======
          <Text>nguyen le an khoa </Text>
>>>>>>> de0f306c413b35977fd9fa96bf5f69ee1c1d3a0c
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    height: 70,
    backgroundColor: '#ECEFF1',
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.3,
    paddingTop: 20,
    elevation: 2
  }
});
