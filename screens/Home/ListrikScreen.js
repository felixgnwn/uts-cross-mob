import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ListrikScreen({ navigation }) {
  const [plnID, setPlnID] = useState('');
  const [error, setError] = useState('');

  const validatePlnID = () => {
    const isValidLength = plnID.length === 12;
    const isValidStart = /^[1-9]/.test(plnID);

    if (!isValidLength || !isValidStart) {
      setError('ID Pelanggan PLN tidak valid. Harus 12 digit dan tidak diawali dengan angka 0.');
    } else {
      setError('');
      navigation.navigate('ListrikPackage', { transactionType: 'Listrik', plnId: plnID });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masukkan ID Pelanggan PLN</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="ID Pelanggan PLN"
        value={plnID}
        onChangeText={setPlnID}
        maxLength={12}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Lanjut" onPress={validatePlnID} />
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
