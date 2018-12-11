# Satellytes
gatsby v2 & graphql + contentful

## Develop
Provide the file `.contentful.json` to locally develop as follows. You will develop with the preview api locally to see all drafts too.

```
"spaceId": "<fill in>",
"previewAccessToken": "<fill in>",
"previewHost": "preview.contentful.com"
```


## Tools
rm -r .cache/ ; env "NODE_ENV=development" "DEBUG=gatsby:query-watcher" npm run dev
