/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  env: {
    NEXT_API_KEY_YOUTUBE: 'AIzaSyBch3Ef7Hq4vuL3SJKBJknPJhtJU6nAIE8',
    NEXT_CHANNEL_ID_YOUTUBE: 'UCs00xsRvokRVEFPs-PLPPFQ'
  }
}

module.exports = nextConfig
