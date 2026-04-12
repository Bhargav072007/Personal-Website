import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inlineCssForWix = () => ({
  name: 'inline-css-for-wix',
  generateBundle(_, bundle) {
    const cssAssets = Object.entries(bundle).filter(([, asset]) => asset.type === 'asset' && asset.fileName.endsWith('.css'));
    const css = cssAssets.map(([, asset]) => asset.source).join('\n');

    if (!css) {
      return;
    }

    const injectCss = `
(() => {
  const id = 'bhargav-portfolio-styles';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = ${JSON.stringify(css)};
  document.head.appendChild(style);
})();
`;

    Object.values(bundle).forEach((asset) => {
      if (asset.type === 'chunk') {
        asset.code = `${injectCss}\n${asset.code}`;
      }
    });

    cssAssets.forEach(([fileName]) => {
      delete bundle[fileName];
    });
  },
});

export default defineConfig({
  plugins: [react(), inlineCssForWix()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist-wix',
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
    lib: {
      entry: path.resolve(__dirname, 'src/wix-entry.jsx'),
      name: 'BhargavPortfolioElement',
      formats: ['iife'],
      fileName: () => 'bhargav-portfolio.js',
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
