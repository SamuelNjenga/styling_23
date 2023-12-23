import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import stylex from 'vite-plugin-stylex';

export default defineConfig({
  plugins: [
    react(),
    stylex(), // Add the StyleX plugin here
  ],
});