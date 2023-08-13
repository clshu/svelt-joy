<script lang="ts">
	// import { invalidate } from '$app/navigation';
	// import type { PageData } from './$types';

	// export let data: PageData;

	// $: ({ posts } = data);

	// const rerunLoadFunction = () => {
	// 	invalidate('app:posts');
	// 	// invalidate('api/posts') It won't in this case due to changing url
	// 	// invalidate(url => url.href.include('app:posts'))
	// 	// invalidateAll()
	// };
</script>

<h1>Form</h1>

<form method="POST" action="/logig">
	<input type="text" name="user" placeholder="user" />
	<input type="password" name="password" placeholder="password" />
	<button type="submit">Login</button>
</form>
