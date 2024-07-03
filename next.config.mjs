import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import createMDX from '@next/mdx';
import { merge } from 'webpack-merge';

const withMdx = createMDX({
  experimental: {
    mdxRs: true,
  },
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack(config, options) {
    // Add custom webpack configurations
    return merge(config, {
      module: {
        rules: [
          {
            test: /\.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  // SVGR options here
                },
              },
            ],
          },
        ],
      },
    });
  },
};

export default withMdx(nextConfig);
