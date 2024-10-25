import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function BPJSPackageScreen({ route, navigation }) {
  const { bpjsNumber } = route.params;

  const months = [1, 2, 3, 4, 5]; // Pilihan paket bulan
  const monthlyRate = 50000; // Rp50.000 per bulan

  console.log(bpjsNumber);

  const renderPackageItem = ({ item }) => {
    const totalAmount = item * monthlyRate;
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('ConfirmationTransaction', { transactionType: 'BPJS', bpjsNumber, totalAmount })}>
        <Text style={styles.text}>Bayar untuk {item} bulan: Rp{totalAmount}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Jumlah Bulan</Text>
      <FlatList
        data={months}
        keyExtractor={(item) => item.toString()}
        renderItem={renderPackageItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  text: {
    fontSize: 16,
  },
});
