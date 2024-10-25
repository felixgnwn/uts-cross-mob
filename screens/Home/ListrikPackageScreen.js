import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function ListrikPackageScreen({ route, navigation }) {
  const { plnId } = route.params;

  const packages = [10000, 20000, 30000, 40000, 50000]; // Kelipatan Rp10.000

  console.log(plnId);

  const renderPackageItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('ConfirmationTransaction', { transactionType: 'Listrik', plnId, harga: item })}>
        <Text style={styles.text}>Paket Listrik: Rp{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Paket Listrik</Text>
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

