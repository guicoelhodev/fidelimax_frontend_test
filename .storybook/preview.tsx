import type { Preview } from "@storybook/react";
import React from 'react'
import '../src/app/globals.css'	
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryCache = new QueryClient();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
export const decorators=[
  (story: any) => (
    <QueryClientProvider  client={queryCache}>
      {story()}
    </QueryClientProvider>
  ),
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
