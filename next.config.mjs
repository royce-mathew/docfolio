import { build } from "velite"

// Support Velite in Turbopack
const isDev = process.argv.indexOf("dev") !== -1
const isBuild = process.argv.indexOf("build") !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1"
  await build({ watch: isDev, clean: !isDev })
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    reactCompiler: true,
  },
}

export default nextConfig
