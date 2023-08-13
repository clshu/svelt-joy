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

## Form Actions combine event handlers and route Rest API handlers together.

- In +page.server.ts, Implement Rest API handler and save it in "actions: Actions {}" using the event handler's name.
- In +page.svelte, use 'export let form: ActionData' to access it. And in \<form\>, prefix handler's name with ?/

```
+page.server.ts:

export const actions: Actions = {
	addTodo: async ({ request }) => {...},
  removeTodo: async ({ request }) => {...}
}

+page.svelte:

<script lang="ts">
	import type { ActionData, PageData } from './$types';

	export let data: PageData;

	export let form: ActionData;
</script>

<form method="POST" action="?/removeTodo">
....
</form>

<form method="POST" action="?/addTodo">
</form>
```
