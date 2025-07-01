import type { NextConfig } from "next";
console.log('env: ',process.env.NODE_ENV,process.env.LICENSE_KEY,process.env.APPID);
const baseConfig: NextConfig = {
  transpilePackages: ['tdesign-react'],
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    config.module.rules.push(
      {
        test: /\.(glb|hdr|mp4|mov|mp3|wav|webm)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/images/',
              outputPath: `${isServer ? '../' : ''}static/images/`,
              name: '[name].[hash:8].[ext]',
            },
          },
        ],
      },
    );
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        minSize: 1024 * 1024, // 1MB
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
      },
    };
    if (!isServer) {
      // config.plugins.push(new BundleAnalyzerPlugin());
    }
    return config;
  },  
}

const nextConfig: NextConfig = process.env.NODE_ENV === 'production' ? {
  ...baseConfig,
  output:'export'
} : {
  ...baseConfig,
  async rewrites(){
    if(process.env.NODE_ENV === 'production') return [];
    const rules = [
      {
        source: '/api/common/signature',
        destination: `https://${process.env.API_DOMAIN}/common/signature`,
      },
    ];
    console.log('rulers',rules,'process.env.NODE_ENV',process.env.NODE_ENV)
    return rules;
  },
}

export default nextConfig;
