import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "127.0.0.1", // Change to your IP address for network access
		port: 3000, // Change to desired port number
		proxy: {
			"/api": {
				target: "http://localhost:5000", // Adjust if needed
				changeOrigin: true,
			},
		},
	},
});
