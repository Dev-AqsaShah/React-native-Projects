import React, { useEffect, useState } from 'react';
import { StatusBar, View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import { initI18n } from './src/i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n';
import 'leaflet/dist/leaflet.css';
import MapView from '../../React-native-Projects/3pl-dynamics-app/src/components/MapView';

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initI18n().then(() => setReady(true));
  }, []);

  if (!ready) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <AppStack />
          <MapView />
        </NavigationContainer>
      </SafeAreaProvider>
    </I18nextProvider>
  );
}
