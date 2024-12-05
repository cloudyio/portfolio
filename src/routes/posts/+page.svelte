<script lang="ts">
    let { data } = $props();
    import Fuse from 'fuse.js'

    import { formatDate } from '$lib/utils'

</script>

<div class="flex flex-col justify-center items-center min-h-screen py-10 bg-base-100 px-4">
    <h1 class="font-semibold text-5xl mb-6">All Posts</h1>
    <p class="text-lg font-semibold mt-5 max-w-3xl mx-auto text-center">
        Read all my blog posts below
    </p>

    <ul class="posts grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mt-8 mx-auto w-full">
        {#each data.posts as post}
            <li class="post col-span-1 mb-2 w-full">
                <div class="p-6 bg-base-300 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 w-full">
                    <h3 class="font-semibold text-xl mt-4">{post.title}</h3>
                    <p class="text-sm text-gray-600 mt-2">
                        {post.description}
                    </p>
                    <p class="text-sm text-gray-500 mt-2">
                        {formatDate(post.date)}
                    </p>
                    <a href="/posts/{post.slug}" class="btn btn-secondary mt-4">Read More</a>
                </div>
            </li>
        {/each}
    </ul>
</div>