// src/components/MapViewComponent.tsx
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

type Props = {
  latitude: number;
  longitude: number;
  region?: Region | null;
  markerTitle?: string;
};

export default function MapViewComponent({ latitude, longitude, region, markerTitle }: Props) {
  const initialRegion: Region = region ?? {
    latitude,
    longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion} region={region ?? initialRegion}>
        <Marker coordinate={{ latitude, longitude }} title={markerTitle ?? 'User'} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: Dimensions.get('window').width, height: '100%' },
});
