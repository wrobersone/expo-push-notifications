import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export default function App() {
  useEffect(() => {
    registerForPushNotification().then(token=>console.log(token)).catch
    (err => console.log(err))
  },[])

  async function registerForPushNotification() {
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status!='granted') {
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    }
    if (status !='granted') {
      alert('Fail to get the push token');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    return token;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! I may add a button soon.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
