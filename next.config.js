/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ["cdn.sanity.io"]
    }
}

// // module.exports = {
// //     webpack: (config, { isServer }) => {
// //       // Add CSS loader for .css files
// //       config.module.rules.push({
// //         test: /\.css$/,
// //         use: ['style-loader', 'css-loader'],
// //       });
  
// //       // Return the modified configuration
// //       return config;
// //     },
//   };

module.exports = nextConfig
