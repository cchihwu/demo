import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const DEFAULT_PORT = 3000;
const AUTO_OPEN_BROWSER = true;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: DEFAULT_PORT,  // 將端口設置為 3000
    open: AUTO_OPEN_BROWSER,  // 自動でブラウザを開く
  },
  build: {
    outDir: 'build', // ビルドの出力先ディレクトリ
  },
  envDir: 'src',
  plugins: [react()],
})
