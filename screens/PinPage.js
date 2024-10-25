import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useTransaction } from '../utils/TransactionContext';

export default function PinPage({ route, navigation }) {
  const { addTransaction } = useTransaction();
  const [pin, setPin] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState(false);
  const correctPin = '123456';
  const birthDatePin = '290403';
  
  const { transactionType, phoneNumber, plnId, harga, operator, bpjsNumber, totalAmount } = route.params;

  const handlePinSubmit = () => {
    if (attempts >= 3) {
      Alert.alert('Transaksi Gagal', 'Anda sudah salah 3 kali. Transaksi tetap dibuat dengan status gagal.');
      addTransaction({
        transactionType,
        phoneNumber,
        plnId,
        harga,
        operator,
        bpjsNumber,
        totalAmount,
        status: 'Failed',
        date: new Date().toLocaleDateString(),
      });
      navigation.navigate('TransactionResult', { status: 'failed' });
      return;
    }

    if (pin === correctPin) {
      addTransaction({
        transactionType,
        phoneNumber,
        plnId,
        harga,
        operator,
        bpjsNumber,
        totalAmount,
        status: 'Success',
        date: new Date().toLocaleDateString(),
      });

      Alert.alert('Sukses', 'PIN berhasil dikonfirmasi!', [
        { text: 'OK', onPress: () => navigation.navigate('TransactionResult', { status: 'success' }) },
      ]);
    } else if (pin === birthDatePin) {
      setError(true);
      setAttempts(attempts + 1);
      Alert.alert('Error', 'PIN salah. Coba lagi.');
    } else {
      setError(true);
      setAttempts(attempts + 1);
      Alert.alert('Error', `PIN salah. Kesempatan tersisa: ${3 - attempts}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masukkan PIN</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        keyboardType="numeric"
        placeholder="PIN"
        value={pin}
        onChangeText={(value) => {
          setPin(value);
          setError(false);
        }}
        maxLength={6}
        secureTextEntry={true}
      />
      <Button title="Konfirmasi PIN" onPress={handlePinSubmit} />
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
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  inputError: {
    borderColor: 'red',
  },
});
