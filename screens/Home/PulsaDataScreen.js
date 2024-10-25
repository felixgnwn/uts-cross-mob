import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function PulsaDataScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const validPrefixes = {
    // Telkomsel
    '0852': 'Telkomsel', '0853': 'Telkomsel', '0811': 'Telkomsel', '0812': 'Telkomsel', 
    '0813': 'Telkomsel', '0821': 'Telkomsel', '0822': 'Telkomsel', '0851': 'Telkomsel',
    // Indosat Ooredoo
    '0857': 'Indosat Ooredoo', '0856': 'Indosat Ooredoo',
    // Tri
    '0896': 'Tri', '0895': 'Tri', '0897': 'Tri', '0898': 'Tri', '0899': 'Tri',
    // XL
    '0817': 'XL', '0818': 'XL', '0819': 'XL', '0859': 'XL', '0877': 'XL', '0878': 'XL',
    // AXIS
    '0832': 'AXIS', '0833': 'AXIS', '0838': 'AXIS',
    // Smartfren
    '0881': 'Smartfren', '0882': 'Smartfren', '0883': 'Smartfren', '0884': 'Smartfren',
    '0885': 'Smartfren', '0886': 'Smartfren', '0887': 'Smartfren', '0888': 'Smartfren',
    '0889': 'Smartfren'
  };

  const validatePhoneNumber = () => {
    const prefix = phoneNumber.substring(0, 4);
    const operator = validPrefixes[prefix];
    const isValidLength = phoneNumber.length <= 13 && phoneNumber.length >= 10;

    if (!operator) {
      setError('Nomor telepon tidak valid. Prefix tidak dikenali.');
    } else if (!isValidLength) {
      setError('Nomor telepon harus antara 10 hingga 13 digit.');
    } else {
      setError('');
      navigation.navigate('PulsaDataPackage', { phoneNumber, operator });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masukkan Nomor Telepon</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="08xxxxxxxxxx"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        maxLength={13}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Lanjut" onPress={validatePhoneNumber} />

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
