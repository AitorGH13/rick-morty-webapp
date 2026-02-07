import Constants from 'expo-constants';

const basePath = Constants?.expoConfig?.experiments?.baseUrl || '';

export const assetPath = (relativePath) => `${basePath}${relativePath}`;

export const applyAssetBase = () => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const setVar = (name, path) => {
    root.style.setProperty(name, `url(${assetPath(path)})`);
  };
  const setFontSrc = (name, path) => {
    root.style.setProperty(name, `url(${assetPath(path)}) format('truetype')`);
  };

  setVar('--asset-bg-main', '/images/fondo_main.jpg');
  setVar('--asset-bg-main-blur', '/images/fondo_main_blur.jpg');
  setVar('--asset-portal', '/images/portal-rick-and-morty.gif');
  setFontSrc('--asset-font-inter-src', '/fonts/Inter-VariableFont.ttf');
  setFontSrc(
    '--asset-font-inter-italic-src',
    '/fonts/Inter-Italic-VariableFont.ttf'
  );
};
