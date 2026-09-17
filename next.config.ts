import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // GitHub Pages serves files without a Node.js server. Vinext uses this
  // setting to pre-render every route as static HTML while keeping the
  // browser-side motion and interaction scripts intact.
  output: 'export',
};

export default nextConfig;
