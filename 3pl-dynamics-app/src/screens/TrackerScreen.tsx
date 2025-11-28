import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

type LocationCoords = {
  latitude: number;
  longitude: number;
};

export default function TrackerScreen() {
  const [location, setLocation] = useState<LocationCoords | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });

      // Update location every 5 seconds
      const interval = setInterval(async () => {
        const newLoc = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: newLoc.coords.latitude,
          longitude: newLoc.coords.longitude,
        });
      }, 5000);

      return () => clearInterval(interval);
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.center}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0B3B8F" />
        <Text>Fetching your location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        <Marker
          coordinate={location}
          title="You are here"
          description="Current location"
        />
      </MapView>
      <View style={styles.footer}>
        <Text>Latitude: {location.latitude.toFixed(6)}</Text>
        <Text>Longitude: {location.longitude.toFixed(6)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  footer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 50 : 30,
    left: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 10,
    borderRadius: 12,
    elevation: 5,
  },
});
