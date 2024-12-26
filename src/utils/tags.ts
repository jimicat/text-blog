import { getCollection } from 'astro:content';

export interface TagCount {
  tag: string;
  count: number;
}

export async function getAllTags(): Promise<TagCount[]> {
  const posts = await getCollection('posts');
  const tagCounts = new Map<string, number>();
  
  posts.forEach(post => {
    post.data.tags.forEach(tag => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });
  
  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}