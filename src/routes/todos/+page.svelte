<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;

	export let form: ActionData;
</script>

<h1>Todos</h1>
<pre>{JSON.stringify(form, null, 2)}</pre>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form method="POST" action="?/removeTodo" use:enhance>
				<input type="hidden" name="id" value={todo._id} />
				<button class="delete" type="submit">X</button>
			</form>
		</li>
	{/each}
</ul>

<form method="POST" action="?/addTodo" use:enhance>
	<input type="text" name="todo" />
	{#if form?.missing}
		<p class="error">This field is required</p>
	{/if}
	<button type="submit">+Add Todo</button>
	<button type="submit" formaction="?/clearAll">Clear</button>
</form>

{#if form?.success}
	<p>Added todo! 😀</p>
{/if}

<style>
	ul {
		padding: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	span {
		margin-right: 1rem;
		text-transform: capitalize;
	}

	.delete {
		margin: 0;
		background: none;
		border: none;
		color: red;
	}
	.error {
		color: red;
	}
</style>
