import { getCollection } from 'astro:content';

export async function getPublishedResources() {
  const resources = await getCollection('resources', ({ data }) => data.status === 'published');
  return resources.sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export function areaSlug(area: string) {
  return area.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function resourceUrl(slug: string) {
  return `/${slug}/`;
}

export function areaUrl(area: string) {
  return `/topics/${areaSlug(area)}/`;
}
