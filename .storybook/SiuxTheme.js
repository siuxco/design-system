import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#371EB4',
  colorSecondary: '#371EB4',

  // UI
  appBg: '#FFF',
  appContentBg: '#FFFFFF',
  appBorderColor: '#c6d0d5',
  appBorderRadius: 8,

  // Typography
  fontBase: 'Inter,Helvetica Neue,Helvetica,Arial,sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#60757f',
  barSelectedColor: '#381fb7',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: '#c6d0d5',
  inputTextColor: 'black',
  inputBorderRadius: 4,
  
  brandTitle: 'SIUX — Design System',
  brandUrl: '/',
  brandImage: 'images/siux-design.svg',
  brandTarget: '_self',
});