<script lang="ts">
	import '../app.css';
	// import type { LayoutData } from './$types';

	// export let data: LayoutData;
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/posts">Posts</a>
		</li>
		<li>
			<a href="/todos">Todos</a>
		</li>
	</ul>
</nav>

<slot />
