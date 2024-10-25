import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function BPJSScreen({ navigation }) {
  const [bpjsNumber, setBpjsNumber] = useState('');
  const [error, setError] = useState('');

  const validateBpjsNumber = () => {
    const isValidLength = bpjsNumber.length === 13;
    const isValidStart = /^0/.test(bpjsNumber);

    if (!isValidLength || !isValidStart) {
      setError('Nomor BPJS tidak valid. Harus 13 digit dan diawali dengan angka 0.');
    } else {
      setError('');
      console.log(bpjsNumber);
      navigation.navigate('BPJSPackage', { transactionType: 'BPJS', bpjsNumber: bpjsNumber });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masukkan Nomor BPJS</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Nomor BPJS"
        value={bpjsNumber}
        onChangeText={setBpjsNumber}
        maxLength={13}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Lanjut" onPress={validateBpjsNumber} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

