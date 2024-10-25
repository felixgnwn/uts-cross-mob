import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetailScreen({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Transaksi</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Tipe Transaksi: </Text>
          {transaction.transactionType}
        </Text>
        
        {transaction.transactionType === 'Pulsa' && (
          <>
            <Text style={styles.detailText}>
              <Text style={styles.label}>Nomor Telepon: </Text>
              {transaction.phoneNumber}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.label}>Harga: </Text>
              Rp{transaction.harga}
            </Text>
          </>
        )}
        
        {transaction.transactionType === 'Listrik' && (
          <>
            <Text style={styles.detailText}>
              <Text style={styles.label}>Customer ID: </Text>
              {transaction.plnId}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.label}>Harga: </Text>
              Rp{transaction.harga}
            </Text>
          </>
        )}
        
        {transaction.transactionType === 'BPJS' && (
          <>
            <Text style={styles.detailText}>
              <Text style={styles.label}>BPJS Number: </Text>
              {transaction.bpjsNumber}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.label}>Total Amount: </Text>
              Rp{transaction.totalAmount}
            </Text>
          </>
        )}
        
        <Text style={styles.detailText}>
          <Text style={styles.label}>Status: </Text>
          <Text style={{ color: transaction.status === 'Success' ? 'green' : 'red' }}>
            {transaction.status}
          </Text>
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.label}>Tanggal: </Text>
          {transaction.date}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#343a40',
  },
  detailContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#495057',
  },
  label: {
    fontWeight: 'bold',
  },
});
