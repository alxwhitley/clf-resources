import type { APIRoute } from 'astro';
import { getPublishedResources } from '../lib/resources';

export const GET: APIRoute = async () => {
  const resources = await getPublishedResources();
  return new Response(JSON.stringify(resources.map((resource) => ({
    title: resource.data.title,
    slug: resource.data.slug,
    area: resource.data.sourceArea,
    format: resource.data.format,
    tags: resource.data.tags,
    searchText: (resource.body ?? '').replace(/<[^>]+>/g, ' ').replace(/[#*_\[\]()>`]/g, ' ').replace(/\s+/g, ' ').toLowerCase(),
  }))), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
