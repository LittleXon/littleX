
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://littlexonsol.com/$1',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

