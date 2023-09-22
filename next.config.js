/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    domains: ['www.shutterstock.com'], // Add the domain of the external image here
  },
     experimental:{
        typedRoutes: true,
    }

}

module.exports = nextConfig
