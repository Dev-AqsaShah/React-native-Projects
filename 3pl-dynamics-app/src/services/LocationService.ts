// src/services/LocationService.ts
import * as Location from 'expo-location';

export type Position = {
  lat: number;
  lng: number;
  timestamp: number;
};

export async function requestForegroundPermission(): Promise<boolean> {
  const { status } = await Location.requestForegroundPermissionsAsync();
  return status === 'granted';
}

export async function getCurrentPosition(): Promise<Position> {
  const loc = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Highest,
  });

  return {
    lat: loc.coords.latitude,
    lng: loc.coords.longitude,
    timestamp: loc.timestamp ?? Date.now(),
  };
}
