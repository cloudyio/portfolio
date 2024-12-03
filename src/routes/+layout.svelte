<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>


<div class="navbar bg-base-200 h-17 fixed">
	<div class="flex-1">
	  <a class="btn btn-ghost text-2xl" href="/">Cloudy</a>
	</div>
	<div class="flex-none">
	  <ul class="menu menu-horizontal px-1 font-medium">
			<li class="flex items-center">
					<a class="btn btn-ghost text-lg" href="/">About</a>
			</li>
			<li class="flex items-center">
					<a class="btn btn-ghost text-lg" href="/">Projects</a>
			</li>
			<li class="flex items-center">
				<button class="btn btn-secondary text-lg"><a href="/">Contact</a></button>
			</li>
	  </ul>
	</div>
  </div>

{@render children()}
