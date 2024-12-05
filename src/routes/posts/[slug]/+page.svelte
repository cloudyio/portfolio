<script lang="ts">
	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="flex flex-col justify-center items-center min-h-screen py-10 bg-base-100 px-4 pt-26">
	<article class="w-full max-w-6xl bg-base-300 shadow-md rounded-lg p-6">
		<hgroup class="text-center">
			<h1 class="font-semibold text-5xl">{data.meta.title}</h1>
			<p class="text-lg text-gray-600 mt-2">Published at {formatDate(data.meta.date)}</p>
		</hgroup>

		<div class="tags flex flex-wrap justify-center mt-4">
			{#each data.meta.categories as category}
            <div class="badge badge-secondary mx-1">{category}</div>
			{/each}
		</div>

		<div class="prose mt-6">
			<data.content />
		</div>
	</article>
</div>