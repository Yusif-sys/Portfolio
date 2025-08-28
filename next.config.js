/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// Change this to your repository name if different
const repoName = 'Portfolio'

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : ''
}

module.exports = nextConfig
