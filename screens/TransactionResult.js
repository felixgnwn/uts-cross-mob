import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TransactionResult({ route, navigation }) {
  const { status } = route.params;

  return (
    <View style={[styles.container, status === 'success' ? styles.success : styles.failed]}>
      <Text style={styles.title}>{status === 'success' ? 'Transaksi Berhasil' : 'Transaksi Gagal'}</Text>
      <Button title="Kembali ke Beranda" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  success: {
    backgroundColor: 'blue',
  },
  failed: {
    backgroundColor: 'red',
  },
});
