import React, { Suspense } from 'react';
import { Platform } from 'react-native';

const WebControler = React.lazy(() => import('./controllers/webController'));

function Controlers() {
  if (Platform.OS !== 'web') return null;

  return (
    <Suspense fallback={<div>Cargando controlador web…</div>}>
      <WebControler />
    </Suspense>
  );
}

export default Controlers;
