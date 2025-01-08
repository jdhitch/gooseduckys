// vite.config.ts
import path from "path";
import { defineConfig } from "file:///C:/Users/Jdhit/eliza/node_modules/vite/dist/node/index.js";
import topLevelAwait from "file:///C:/Users/Jdhit/eliza/node_modules/vite-plugin-top-level-await/exports/import.mjs";
import react from "file:///C:/Users/Jdhit/eliza/node_modules/@vitejs/plugin-react/dist/index.mjs";
import wasm from "file:///C:/Users/Jdhit/eliza/node_modules/vite-plugin-wasm/exports/import.mjs";
import { config } from "file:///C:/Users/Jdhit/eliza/node_modules/dotenv/lib/main.js";
var __vite_injected_original_dirname = "C:\\Users\\Jdhit\\eliza\\client";
config({ path: path.resolve(__vite_injected_original_dirname, "../.env") });
var vite_config_default = defineConfig({
  plugins: [wasm(), topLevelAwait(), react()],
  optimizeDeps: {
    exclude: ["onnxruntime-node", "@anush008/tokenizers"]
  },
  build: {
    commonjsOptions: {
      exclude: ["onnxruntime-node", "@anush008/tokenizers"]
    },
    rollupOptions: {
      external: ["onnxruntime-node", "@anush008/tokenizers"]
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    host: true,
    proxy: {
      "/api": {
        target: `http://127.0.0.1:${process.env.SERVER_PORT || 3e3}`,
        changeOrigin: true,
        rewrite: (path2) => path2.replace(/^\/api/, "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKZGhpdFxcXFxlbGl6YVxcXFxjbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEpkaGl0XFxcXGVsaXphXFxcXGNsaWVudFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvSmRoaXQvZWxpemEvY2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHRvcExldmVsQXdhaXQgZnJvbSBcInZpdGUtcGx1Z2luLXRvcC1sZXZlbC1hd2FpdFwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbmltcG9ydCB3YXNtIGZyb20gXCJ2aXRlLXBsdWdpbi13YXNtXCI7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcclxuXHJcbmNvbmZpZyh7IHBhdGg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi4vLmVudlwiKSB9KTtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW3dhc20oKSwgdG9wTGV2ZWxBd2FpdCgpLCByZWFjdCgpXSxcclxuICAgIG9wdGltaXplRGVwczoge1xyXG4gICAgICAgIGV4Y2x1ZGU6IFtcIm9ubnhydW50aW1lLW5vZGVcIiwgXCJAYW51c2gwMDgvdG9rZW5pemVyc1wiXSxcclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICAgIGNvbW1vbmpzT3B0aW9uczoge1xyXG4gICAgICAgICAgICBleGNsdWRlOiBbXCJvbm54cnVudGltZS1ub2RlXCIsIFwiQGFudXNoMDA4L3Rva2VuaXplcnNcIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGV4dGVybmFsOiBbXCJvbm54cnVudGltZS1ub2RlXCIsIFwiQGFudXNoMDA4L3Rva2VuaXplcnNcIl0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgICBob3N0OiB0cnVlLFxyXG4gICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgICAgIFwiL2FwaVwiOiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGBodHRwOi8vMTI3LjAuMC4xOiR7cHJvY2Vzcy5lbnYuU0VSVkVSX1BPUlQgfHwgMzAwMH1gLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sIFwiXCIpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2USxPQUFPLFVBQVU7QUFDOVIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLGNBQWM7QUFMdkIsSUFBTSxtQ0FBbUM7QUFPekMsT0FBTyxFQUFFLE1BQU0sS0FBSyxRQUFRLGtDQUFXLFNBQVMsRUFBRSxDQUFDO0FBR25ELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsY0FBYyxHQUFHLE1BQU0sQ0FBQztBQUFBLEVBQzFDLGNBQWM7QUFBQSxJQUNWLFNBQVMsQ0FBQyxvQkFBb0Isc0JBQXNCO0FBQUEsRUFDeEQ7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILGlCQUFpQjtBQUFBLE1BQ2IsU0FBUyxDQUFDLG9CQUFvQixzQkFBc0I7QUFBQSxJQUN4RDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ1gsVUFBVSxDQUFDLG9CQUFvQixzQkFBc0I7QUFBQSxJQUN6RDtBQUFBLEVBQ0o7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN4QztBQUFBLEVBQ0o7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNILFFBQVE7QUFBQSxRQUNKLFFBQVEsb0JBQW9CLFFBQVEsSUFBSSxlQUFlLEdBQUk7QUFBQSxRQUMzRCxjQUFjO0FBQUEsUUFDZCxTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxNQUNoRDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
