/** @type {import('next').NextConfig} */
// const nodeExternals = require('webpack-node-externals');
const nextConfig = {
    images:{
        domains:['res.cloudinary.com'],
        
    },
    output:"standalone"
}

module.exports = nextConfig
