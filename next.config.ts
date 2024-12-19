import withPWAInit from "@ducanh2912/next-pwa";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA({
  reactStrictMode: true,
});
