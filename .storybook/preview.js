
import { styled } from '@storybook/theming';
import siuxTheme from './SiuxTheme';

const divEmpty = styled.div(({ theme }) => ({
}));
const pEmpty = styled.p(({ theme }) => ({
}));
const h2Empty = styled.p(({ theme }) => ({
}));
const spanEmpty = styled.span(({ theme }) => ({
}));
const inputEmpty = styled.input(({ theme }) => ({
}));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: siuxTheme,
    components: {
      p: pEmpty,
      div: divEmpty,
      h2: h2Empty,
      span: spanEmpty,
      input: inputEmpty
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['SIUX Design System', 'Getting Started', 'Components'],
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
    ],
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
      highlighter: {
        showLineNumbers: true, // default: false
      },
    },
  },
  layout: 'centered',
}