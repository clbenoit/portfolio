import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog_en');
  return rss({
    title: "Clément BENOIT's Blog",
    description: 'Bioinformatics, clinical genomics, AI-driven biomedical pipelines',
    site: context.site || 'https://clbenoit.github.io/portfolio',
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map(post => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description || '',
        link: `/portfolio/en/blog/${post.id}/`,
      })),
  });
}