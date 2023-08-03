/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'ddragon.leagueoflegends.com',
                port: '',
                pathname: '/cdn/13.14.1/img/champion/*'
            },
            {
                protocol: 'http',
                hostname: 'ddragon.leagueoflegends.com',
                port: '',
                pathname: '/cdn/img/champion/splash/*'
            },
            {
                protocol: 'http',
                hostname: 'ddragon.leagueoflegends.com',
                port: '',
                pathname: '/cdn/13.14.1/img/spell/*'
            },
            {
                protocol: 'http',
                hostname: 'ddragon.leagueoflegends.com',
                port: '',
                pathname: '/cdn/13.14.1/img/passive/*'
            },
            {
                protocol: 'http',
                hostname: 'ddragon.leagueoflegends.com',
                port: '',
                pathname: '/cdn/img/champion/**'
            },
            
        ],
    },
}
