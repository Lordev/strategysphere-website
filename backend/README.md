# ⚡ Strategysphere Backend — Sanity Studio

Strategysphere's Sanity Studio used to create and manage blog content for the frontend in `../frontend` (hosted on sanity.io).

## 📦 Technologies

- `Sanity` 
- `TypeScript` 
- `npm` 

## 👩🏽‍🍳 Process 

Defined a canonical `blockContent` array (`schemaTypes/blockContent.ts`) that includes: `block` styles (normal, h1–h4, blockquote), lists, link annotations, `image`, `youtube`, and `imageGallery` object types.

Created the `post` document (`schemaTypes/post.ts`) with fields: `title`, `slug`, `author` (reference), `mainImage`, `categories` (array of references), `publishedAt`, `body` (blockContent) and `description`.

Added object types: `youtube` (simple URL + Studio preview) and `imageGallery` (images array with a preview component). See `schemaTypes/youtubeType/` and `schemaTypes/imageGallery/` for previews and helpers. Registered all schemas in `schemaTypes/index.ts` so Studio picks them up.


## ▶️ Demo Access

This Studio is provided primarily for demonstration and content editing previews. If someone needs read-only access I can add them as a Viewer on request — no need to run the Studio locally for most consumers.

## 📸 CMS Showcase

Quick overview of what you can edit in Studio:

https://github.com/user-attachments/assets/4e89ef4d-0400-4a4d-98f0-8f76a56f5613
