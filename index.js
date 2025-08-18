import { Platform } from 'react-native';
import { registerRootComponent } from 'expo';

if (Platform.OS === 'web') {
  import('./src/App').then(({ default: App }) => {
    import('react-dom/client').then(({ createRoot }) => {
      const container = document.getElementById('root');
      const root = createRoot(container);
      root.render(<App />);
    });
  });
} else {
  import('./src/App').then(({ default: App }) => {
    registerRootComponent(App);
  });
}
