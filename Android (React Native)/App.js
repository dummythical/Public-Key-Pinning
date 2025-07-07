import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {fetch as pinnedFetch} from 'react-native-ssl-pinning';

const SERVER_URL = 'https://192.168.1.21';

export default function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    async function request() {
      try {
        const response = await pinnedFetch(SERVER_URL, {
          method: 'GET',
          timeoutInterval: 5000,
          sslPinning: {
            certs: ['server-public'],
          },
        });
        const text = await response.text();
        setMessage(text);
      } catch (e) {
        setMessage(`Error: ${e.message || e}`);
      }
    }
    request();
  }, []);

  return (
    <SafeAreaView>
      <Text>{message}</Text>
    </SafeAreaView>
  );
}
