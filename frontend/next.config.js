/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // No bloquear el build si hay errores de ESLint
      ignoreDuringBuilds: true,
    },
  };
  
  module.exports = nextConfig;
  