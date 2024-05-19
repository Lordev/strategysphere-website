import { createClient, type QueryParams } from "@sanity/client";

export const client = createClient({
    projectId: "tpz25z77",
    dataset: "production",
    // Set to `true` for production environments
    apiVersion: "2021-08-31",
    useCdn: false,
});
