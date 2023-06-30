import { addons } from '@storybook/manager-api';
import siuxTheme from './SiuxTheme';

addons.setConfig({
  theme: siuxTheme,
  showPanel: true,
  panelPosition: 'right',
});