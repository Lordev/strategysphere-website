import { type QueryParams } from "@sanity/client";
import { client } from "./client";

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
