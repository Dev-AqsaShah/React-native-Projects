import Welcome from '@/screens/Welcome';

  export default function Index() {
    return <Welcome onNavigate={function (to: 'welcome' | 'signin' | 'signup' | 'home', opts?: { user?: any; }): void {
      throw new Error('Function not implemented.');
    } } />;
  }
