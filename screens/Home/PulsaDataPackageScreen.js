import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function PulsaDataPackageScreen({ route, navigation }) {
  const { phoneNumber, operator } = route.params;

  const packages = [5000, 10000, 15000, 20000, 25000, 30000]; // Kelipatan Rp5.000
  const tax = 1500;

  const renderPackageItem = ({ item }) => {
    const hargaAkhir = item + tax;
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('ConfirmationTransaction', { transactionType: 'Pulsa', phoneNumber, operator, harga: hargaAkhir })}>
        <Text style={styles.text}>Paket Pulsa: Rp{item}</Text>
        <Text style={styles.text}>Harga Akhir (termasuk pajak): Rp{hargaAkhir}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Paket Pulsa</Text>
      <FlatList
        data={packages}
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

