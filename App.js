import { Platform,View,Text } from 'react-native';

function Controlers() {
  if (Platform.OS === 'web') {
    let WebControler = require('./controlers/webControler').default;
    return (
      <WebControler />
    );
  } else {

  }
  
}

export default Controlers;