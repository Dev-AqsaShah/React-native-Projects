// App.tsx
import React, { JSX, useState } from 'react';
import { SafeAreaView, View, StatusBar, Text, Button, StyleSheet } from 'react-native';
import Welcome from './src/screens/Welcome';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

export type User = { name?: string; email?: string } | null;
type ScreenName = 'welcome' | 'signin' | 'signup' | 'home';

export default function App(): JSX.Element {
  const [screen, setScreen] = useState<ScreenName>('welcome');
  const [user, setUser] = useState<User>(null);

  const go = (to: ScreenName, opts?: { user?: User }) => {
    if (opts?.user) setUser(opts.user);
    setScreen(to);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      {screen === 'welcome' && <Welcome onNavigate={go} />}
      {screen === 'signin' && <SignIn onNavigate={go} />}
      {screen === 'signup' && <SignUp onNavigate={go} />}
      {screen === 'home' && (
        <View style={styles.homeWrap}>
          <UserHome user={user} onSignOut={() => { setUser(null); setScreen('welcome'); }} />
        </View>
      )}
    </SafeAreaView>
  );
}

function UserHome({ user, onSignOut }: { user: User; onSignOut: () => void }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 16 }}>
        Welcome, {user?.name ?? 'User'}!
      </Text>
      <Button title="Sign out" onPress={onSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  homeWrap: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
