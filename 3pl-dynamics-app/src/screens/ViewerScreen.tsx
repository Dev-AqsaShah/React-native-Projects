// src/screens/ViewerScreen.tsx
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import MapViewComponent from '../components/MapViewComponent';
import { getLocation } from '../api/api';
import { VIEWER_POLL_MS } from '../utils/config';

export default function ViewerScreen() {
  const [userId, setUserId] = useState<string>('');
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [watching, setWatching] = useState(false);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startWatching = () => {
    if (!userId) return;
    setWatching(true);
    poll();
    intervalRef.current = setInterval(poll, VIEWER_POLL_MS);
  };

  const stopWatching = () => {
    setWatching(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const poll = async () => {
    try {
      const data = await getLocation(userId);
      setPosition({ lat: data.lat, lng: data.lng });
    } catch (e) {
      console.warn('no loc yet', e);
      setPosition(null);
    }
  };

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <TextInput placeholder="Enter userId to view" value={userId} onChangeText={setUserId} style={styles.input} />
      <View style={{ flexDirection: 'row', gap: 8 }}>
        <Button title={watching ? 'Watching...' : 'Start Watching'} onPress={startWatching} disabled={watching || !userId} />
        <Button title="Stop" onPress={stopWatching} disabled={!watching} />
      </View>

      <View style={{ flex: 1, marginTop: 12 }}>
        {position ? (
          <MapViewComponent latitude={position.lat} longitude={position.lng} markerTitle={userId} />
        ) : (
          <Text>No location yet for this user.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, padding: 8, marginBottom: 8 },
});
