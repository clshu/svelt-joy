<script lang="ts">
  import {page} from '$app/stores';
	import { json } from '@sveltejs/kit';
</script>

<h1>Boom</h1>
<p> Something wrong</p>

<pre>
  {JSON.stringify($page, null, 2)}
</pre>