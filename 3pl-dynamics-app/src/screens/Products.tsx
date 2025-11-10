// src/screens/ProductsScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Colors } from '../theme';

const SAMPLE = [
  { id: 'p1', name: 'Parcel A', qty: 34 },
  { id: 'p2', name: 'Box B', qty: 12 },
  { id: 'p3', name: 'Crate C', qty: 5 },
];

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={SAMPLE}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.qty}>{item.qty}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: Colors.white },
  title: { fontSize: 20, fontWeight: '700', color: Colors.primary, marginBottom: 12 },
  row: { padding: 12, borderRadius: 8, backgroundColor: '#F7FAFF', marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between' },
  name: { fontWeight: '600' },
  qty: { color: Colors.muted }
});
