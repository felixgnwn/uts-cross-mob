import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function ConfirmationTransactionScreen({ route, navigation }) {
  const {
    transactionType,
    phoneNumber,
    plnId,
    harga,
    operator,
    bpjsNumber,
    totalAmount,
  } = route.params;

  console.log("Transaction Details:", {
    transactionType,
    phoneNumber,
    plnId,
    harga,
    operator,
    bpjsNumber,
    totalAmount,
  });

  const handleConfirmPayment = () => {
    navigation.navigate("PinPage", {
      transactionType,
      phoneNumber,
      plnId,
      harga,
      operator,
      bpjsNumber,
      totalAmount,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Konfirmasi Pembayaran</Text>
      <View style={styles.detailsContainer}>
        {transactionType === "Pulsa" && (
          <>
            <Text style={styles.detailText}>Nomor Telepon: {phoneNumber}</Text>
            <Text style={styles.detailText}>Operator: {operator}</Text>
            <Text style={styles.detailText}>Harga: Rp{harga}</Text>
          </>
        )}
        {transactionType === "Listrik" && (
          <>
            <Text style={styles.detailText}>Customer ID: {plnId}</Text>
            <Text style={styles.detailText}>Harga: Rp{harga}</Text>
          </>
        )}
        {transactionType === "BPJS" && (
          <>
            <Text style={styles.detailText}>BPJS Number: {bpjsNumber}</Text>
            <Text style={styles.detailText}>Total Amount: Rp{totalAmount}</Text>
          </>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleConfirmPayment}>
        <Text style={styles.buttonText}>Konfirmasi Pembayaran</Text>
      </TouchableOpacity>
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
    textAlign: "center",
    marginBottom: 20,
    color: '#343a40',
    fontWeight: 'bold',
  },
  detailsContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
