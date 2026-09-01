import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog_fr');
  return rss({
    title: "Blog de Clément BENOIT",
    description: 'Bioinformatique, génomique clinique, pipelines biomédicaux basés sur l\'IA',
    site: context.site || 'https://clbenoit.github.io/portfolio',
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map(post => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description || '',
        link: `/portfolio/fr/blog/${post.id}/`,
      })),
  });
}