import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useTransaction } from '../utils/TransactionContext';

export default function HistoryScreen({ navigation }) {
  const { transactionHistory } = useTransaction();

  const handleTransactionPress = (transaction) => {
    navigation.navigate('TransactionDetail', { transaction });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Transaksi</Text>
      {transactionHistory.length === 0 ? (
        <Text style={styles.noHistory}>Tidak ada transaksi</Text>
      ) : (
        <FlatList
          data={transactionHistory}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleTransactionPress(item)}>
              <View style={styles.historyItem}>
                <Text>Tipe Transaksi: {item.transactionType}</Text>
                {item.transactionType === 'Pulsa' && <Text>Nomor Telepon: {item.phoneNumber}</Text>}
                {item.transactionType === 'Listrik' && <Text>Customer ID: {item.plnId}</Text>}
                {item.transactionType === 'BPJS' && <Text>BPJS Number: {item.bpjsNumber}</Text>}
                <Text>Status: <Text style={{ color: item.status === 'Success' ? 'green' : 'red' }}>{item.status}</Text></Text>
                <Text>Tanggal: {item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  noHistory: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
  historyItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});

