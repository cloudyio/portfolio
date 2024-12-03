<script lang="ts">
    import {CircleArrowDown} from 'lucide-svelte';
</script>



<div class="flex justify-center items-center min-h-screen ">
    <div class="flex flex-col items-center">
        <h1 class="font-semibold text-5xl text-center -mt-12"> Cloudy </h1>
        <h3 class=" text-center w-96 mt-3 text-lg font-semibold"> A software developer who makes websites. View my projects below! </h3>
        <button class="btn w-44 btn-primary mt-3 text-lg font-semibold">Explore projects</button>
    </div>
</div>

<div class="flex justify-center items-center min-h-screen" id="aboutme">
    <div class="flex flex-col items-center">
        <h1 class="font-semibold text-5xl text-center"> About Me </h1>
        <p class="text-center w-96 mt-3 text-lg font-semibold"> I am a passionate software developer with experience in creating dynamic and responsive web applications. </p>
    </div>
</div>

<button on:click={() => document.getElementById('aboutme').scrollIntoView()}>
    <CircleArrowDown size="35" class="absolute bottom-10 left-1/2 transform -translate-x-1/2 hover:fill-gray" />
    
</button>

