# Satellytes Website
Based on the [JamStack](https://jamstack.org/)
by using Gatsby v2, GraphQL & Contentful.

---

## Develop
Provide the file `.contentful.json` to locally develop as follows. You will develop with the preview api locally to see all drafts too.

```
"spaceId": "<fill in>",
"previewAccessToken": "<fill in>",
"previewHost": "preview.contentful.com"
```

If you need to debug graphql you can enable the query watcher:

```
rm -r .cache/ ; env "NODE_ENV=development" "DEBUG=gatsby:query-watcher" npm run dev
```
