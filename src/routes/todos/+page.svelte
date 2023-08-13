<script lang="ts">
	import type { PageData } from './$types';
	import { invalidateAll } from '$app/navigation';

	export let data: PageData;

	interface Data {
		success: boolean;
		errors: Record<string, string>;
	}

	let form: Data;

	const removeTodo = async (event: Event) => {
		const formEl = event.target as HTMLFormElement;
		const data = new FormData(formEl);
		// console.dir(formEl);

		const response = await fetch(formEl.action, {
			method: 'DELETE',
			body: data
		});

		const resData = await response.json();

		form = resData;

		formEl.reset();

		await invalidateAll();
	};
	const addTodo = async (event: Event) => {
		const formEl = event.target as HTMLFormElement;
		const data = new FormData(formEl);
		// console.dir(formEl);

		const response = await fetch(formEl.action, {
			method: 'POST',
			body: data
		});

		const resData = await response.json();

		form = resData;

		formEl.reset();

		await invalidateAll();
	};
</script>

<h1>Todos</h1>
<pre>{JSON.stringify(data, null, 2)}</pre>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form on:submit|preventDefault={removeTodo} method="POST">
				<input type="hidden" name="id" value={todo._id} />
				<button class="delete" type="submit" name="id">X</button>
			</form>
		</li>
	{/each}
</ul>

<form on:submit|preventDefault={addTodo} method="POST">
	<input type="text" name="todo" />
	{#if form?.errors.todo}
		<p class="error">This field is required</p>
	{/if}
	<button type="submit">+Add Todo</button>
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
