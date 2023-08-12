# Notes

## Play with regex

- regexr.com

## .env

- Use VITE\_ prefix to let vite pick up the env variables in .env

## Blocking prevetion

```
// $page.server.ts
export const load: PageLoad = async ({parent}) => {
  // 1. this `load` functiom fires first
  const data = await getData();
  // 2. this `load` function dirse later
  const parentData = await parent();

}
```
