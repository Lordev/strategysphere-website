import { createClient, type QueryParams } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET 

export const client = createClient({
	projectId,
	dataset,
	apiVersion: '2021-08-31',
	useCdn: true,
});
