import "server-only";

import { createClient, type QueryParams } from "@sanity/client";

export const client = createClient({
    projectId: "tpz25z77",
    dataset: "production",
    apiVersion: "2021-08-31",
    useCdn: false,
});

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    tags,
}: {
    query: string;
    params?: QueryParams;
    tags?: string[];
}) {
    return client.fetch<QueryResponse>(query, params, {
        next: {
            revalidate: 30,
            tags,
        },
    });
}
