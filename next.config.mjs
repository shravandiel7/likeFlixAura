/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'maxwillett.com',
            port: '',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'www.candidshutters.com',
            port: '',
            pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'img.freepik.com',
          port: '',
          pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'plus.unsplash.com',
      port: '',
      pathname: '/**',
  },
  {
    protocol: 'https',
    hostname: 'images.unsplash.com',
    port: '',
    pathname: '/**',
},
  {
    protocol: 'https',
    hostname: 'shaadisquad.com',
    port: '',
    pathname: '/**',
},
{
  protocol: 'https',
  hostname: 'wpolive.com',
  port: '',
  pathname: '/**',
},
{
  protocol: 'https',
  hostname: 'cdn.rareblocks.xyz',
  port: '',
  pathname: '/**',
},
{
  protocol: 'https',
  hostname: 'wpolive.com',
  port: '',
  pathname: '/**',
},
{
  protocol: 'https',
  hostname: 'wedding-ideas',
  port: '',
  pathname: '/**',
},
{
  protocol: 'https',
  hostname: 'weddingimage.betterhalf.ai',
  port: '',
  pathname: '/**',
},
        {
            protocol: 'http',
            hostname: 'localhost', // or your domain in production
            port: '3000', // Add port if you're running on localhost
            pathname: '/api/uploads/**',
        },
    ],
  },
};

export default nextConfig;
