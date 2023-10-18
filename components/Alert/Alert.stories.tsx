import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    state: { control: { type: 'select' } },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '250px' }}>
        <Story light dark={false} />
      </div>
    ),
  ],
};

export const Info = {
  args: {
    state: 'info',
    children: 'Informational note',
  },
};

export const Success = {
  args: {
    state: 'success',
    children: 'Informational note',
  },
};

export const Warning = {
  args: {
    state: 'warning',
    children: 'Informational note',
  },
};

export const Error = {
  args: {
    state: 'error',
    children: 'Informational note',
  },
};

export const CloseIcon = {
  args: {
    state: 'info',
    close: true,
    children: 'Informational note',
  },
};

export const CustomIcon = {
  args: {
    state: 'success',
    icon: 'icon-system-mail-send-line',
    children: 'Message sent successfully',
  },
};
