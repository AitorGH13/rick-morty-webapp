import { Platform } from 'react-native';

async function Controlers() {
  if (Platform.OS === 'web') {
    const WebControler = (await import('./controlers/webControler')).default;
    return <WebControler />;
  } else {
    return null;
  }
}

export default Controlers;
