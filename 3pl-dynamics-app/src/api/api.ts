// src/api/api.ts
import axios from 'axios';
import { SERVER_URL } from '../utils/config';

export type LocPayload = {
  userId: string;
  lat: number;
  lng: number;
  timestamp?: number;
};

export async function updateLocation(payload: LocPayload) {
  const url = `${SERVER_URL}/update-location`;
  return axios.post(url, payload);
}

export async function getLocation(userId: string) {
  const url = `${SERVER_URL}/get-location/${encodeURIComponent(userId)}`;
  const res = await axios.get(url);
  return res.data as { lat: number; lng: number; timestamp: number };
}

export async function getAllLocations() {
  const url = `${SERVER_URL}/all-locations`;
  const res = await axios.get(url);
  return res.data as Record<string, { lat: number; lng: number; timestamp: number }>;
}
