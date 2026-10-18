/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/ai-chat-app',
        destination: '/ai-chat-app.html',
      },
       {
        source: '/ai-chat-app-2',
        destination: '/ai-chat-app2.html',
      },
      {
        source: '/ai-chat-app-4',
        destination: '/ai-chat-app4.html',
      },
      {
        source: '/aws-deploy',
        destination: '/aws-deploy-checklist.html',
      },
    ];
  },
};

export default nextConfig;
