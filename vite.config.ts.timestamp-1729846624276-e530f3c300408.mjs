// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import vue from "file:///D:/Work/Template/gogo-vue3-admin/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.10_@types+node@20.17.0_sass@1.80.4__vue@3.5.12_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/Work/Template/gogo-vue3-admin/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.0.1_vite@5.4.10_@types+node@20.17.0_sass@1.80.4__vue@3.5.12_typescript@5.6.3_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { defineConfig } from "file:///D:/Work/Template/gogo-vue3-admin/node_modules/.pnpm/vite@5.4.10_@types+node@20.17.0_sass@1.80.4/node_modules/vite/dist/node/index.js";
import vueDevTools from "file:///D:/Work/Template/gogo-vue3-admin/node_modules/.pnpm/vite-plugin-vue-devtools@7.5.4_rollup@4.24.0_vite@5.4.10_@types+node@20.17.0_sass@1.80.4__vue@3.5.12_typescript@5.6.3_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/Work/Template/gogo-vue3-admin/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 引入 variables.scss 这样就可以在全局中使用 variables.scss中预定义的变量了。使用@use避免了使用@import导致的重复引入问题，
        additionalData: `@use "@/styles/variables.scss" as *;`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXb3JrXFxcXFRlbXBsYXRlXFxcXGdvZ28tdnVlMy1hZG1pblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcV29ya1xcXFxUZW1wbGF0ZVxcXFxnb2dvLXZ1ZTMtYWRtaW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1dvcmsvVGVtcGxhdGUvZ29nby12dWUzLWFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnO1xuXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJztcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbdnVlKCksIHZ1ZUpzeCgpLCB2dWVEZXZUb29scygpXSxcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcblx0XHR9LFxuXHR9LFxuXHRjc3M6IHtcblx0XHRwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG5cdFx0XHRzY3NzOiB7XG5cdFx0XHRcdC8vIFx1NUYxNVx1NTE2NSB2YXJpYWJsZXMuc2NzcyBcdThGRDlcdTY4MzdcdTVDMzFcdTUzRUZcdTRFRTVcdTU3MjhcdTUxNjhcdTVDNDBcdTRFMkRcdTRGN0ZcdTc1MjggdmFyaWFibGVzLnNjc3NcdTRFMkRcdTk4ODRcdTVCOUFcdTRFNDlcdTc2ODRcdTUzRDhcdTkxQ0ZcdTRFODZcdTMwMDJcdTRGN0ZcdTc1MjhAdXNlXHU5MDdGXHU1MTREXHU0RTg2XHU0RjdGXHU3NTI4QGltcG9ydFx1NUJGQ1x1ODFGNFx1NzY4NFx1OTFDRFx1NTkwRFx1NUYxNVx1NTE2NVx1OTVFRVx1OTg5OFx1RkYwQ1xuXHRcdFx0XHRhZGRpdGlvbmFsRGF0YTogYEB1c2UgXCJAL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiIGFzICo7YCxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUixTQUFTLGVBQWUsV0FBVztBQUU3VCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8saUJBQWlCO0FBTHVKLElBQU0sMkNBQTJDO0FBUWhPLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLFlBQVksQ0FBQztBQUFBLEVBQ3hDLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDckQ7QUFBQSxFQUNEO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSixxQkFBcUI7QUFBQSxNQUNwQixNQUFNO0FBQUE7QUFBQSxRQUVMLGdCQUFnQjtBQUFBLE1BQ2pCO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
