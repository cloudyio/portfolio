<script lang="ts">
    import { CircleArrowDown } from 'lucide-svelte';
    import C from '../icons/languages/c.svg?url';
    import Python from '../icons/languages/python.svg?url';
    import Javascript from '../icons/languages/javascript.svg?url';
    import Typescript from '../icons/languages/typescript.svg?url';
    import Html from '../icons/languages/html5.svg?url';
    import Css from '../icons/languages/css3.svg?url';

    //technologies
    import Nodejs from '../icons/technologies/nodejs.svg?url';
    import Nextjs from '../icons/technologies/nextjs.svg?url';
    import React from '../icons/technologies/react.svg?url';
    import Svelte from '../icons/technologies/svelte.svg?url';
    import Tailwind from '../icons/technologies/tailwindcss.svg?url';
    import Daisyui from '../icons/technologies/daisyui.svg?url';

    //databases
    import Mongodb from '../icons/databases/mongodb.svg?url';
    import Sqlite from '../icons/databases/sqlite.svg?url';
    import Mysql from '../icons/databases/mysql.svg?url';
    import Firebase from '../icons/databases/firebase.svg?url';

    //devops
    import Docker from '../icons/devops/docker.svg?url';
    import Git from '../icons/devops/git.svg?url';
    import Oracle from '../icons/devops/oracle.svg?url';
    import Vercel from '../icons/devops/vercel.svg?url';
    import Github from '../icons/devops/github.svg?url';
    import Nginx from '../icons/devops/nginx.svg?url';
    import Ubuntu from '../icons/devops/ubuntu.svg?url';

    //other
    import Cloudflare from '../icons/other/cloudflare.svg?url';
    import Figma from '../icons/other/figma.svg?url';
    import Nano from '../icons/other/nano.svg?url';
    import Notion from '../icons/other/notion.svg?url';
    import Tmux from '../icons/other/tmux.svg?url';

</script>

<div class="flex flex-col justify-center items-center min-h-screen px-4 bg-base-100">
    <div class="text-center">
        <h1 class="font-semibold text-5xl">Cloudy</h1>
        <h3 class="text-lg font-semibold mt-3 max-w-3xl mx-auto">A software developer who makes websites. View my projects below!</h3>
        <button class="btn btn-primary w-44 mt-5 text-lg font-semibold" on:click={() => document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' })}>Explore Projects</button>
    </div>
</div>

<div class="flex flex-col justify-center items-center min-h-screen py-10 bg-base-100" id="aboutme">
    <h1 class="font-semibold text-5xl mb-6">About Me</h1>
    <p class="text-lg font-semibold mt-5 max-w-3xl mx-auto text-center">
        I'm a software developer with experience in system management, web development, and cloud computing. I make small web apps that solve small but useful problems.
    </p>

    <h2 class="font-semibold text-3xl mt-10 mb-4">Skills & Technologies</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-center">
        <div class="p-4 bg-base-300 shadow-md rounded-lg">
            <h3 class="font-semibold text-xl">Languages</h3>
            <div class="flex flex-wrap">
                <img src={C} alt="C" class="w-8 mx-2" />
                <img src={Javascript} alt="Javascript" class="w-8 h-12 mx-2" />
                <img src={Typescript} alt="Typescript" class="w-8 h-12 mx-2" />
                <img src={Html} alt="Html" class="w-8 h-12 mx-2" />
                <img src={Css} alt="Css" class="w-8 h-12 mx-2" />
                <img src={Python} alt="Python" class="w-8 h-12 mx-2" />
            </div>
        </div>
        <div class="p-4 bg-base-300 shadow-md rounded-lg">
            <h3 class="font-semibold text-xl">Technologies</h3>
            <div class="flex flex-wrap">
                <img src={Nodejs} alt="Nodejs" class="w-8 h-12 mx-2" />
                <img src={Nextjs} alt="Nextjs" class="w-8 h-12 mx-2" />
                <img src={React} alt="React" class="w-8 h-12 mx-2" />
                <img src={Svelte} alt="Svelte" class="w-8 h-12 mx-2" />
                <img src={Tailwind} alt="Tailwind" class="w-8 h-12 mx-2" />
                <img src={Daisyui} alt="Daisyui" class="w-8 h-12 mx-2" />
            </div>
        </div>
        <div class="p-4 bg-base-300 shadow-md rounded-lg">
            <h3 class="font-semibold text-xl">Databases</h3>
            <div class="flex flex-wrap justify-center">
                <img src={Mongodb} alt="Mongodb" class="w-8 h-12 mx-2" />
                <img src={Sqlite} alt="Sqlite" class="w-8 h-12 mx-2" />
                <img src={Firebase} alt="Firebase" class="w-8 h-12 mx-2" />
            </div>
        </div>
        <div class="p-4 bg-base-300 shadow-md rounded-lg">
            <h3 class="font-semibold text-xl">DevOps</h3>
            <div class="flex flex-wrap justify-center">
                <img src={Docker} alt="Docker" class="w-8 h-12 mx-2" />
                <img src={Git} alt="Git" class="w-8 h-12 mx-2" />
                <img src={Oracle} alt="Oracle" class="w-8 h-12 mx-2" />
                <img src={Vercel} alt="Vercel" class="w-8 h-12 mx-2" />
                <img src={Github} alt="Github" class="w-8 h-12 mx-2" />
                <img src={Nginx} alt="Nginx" class="w-8 h-12 mx-2" />
                <img src={Ubuntu} alt="Ubuntu" class="w-8 h-12 mx-2" />
                </div>
        </div>

        <div class="p-4 bg-base-300 shadow-md rounded-lg">
            <h3 class="font-semibold text-xl">Other Tools</h3>
            <div class="flex flex-wrap justify-center">
                <img src={Cloudflare} alt="Cloudflare" class="w-8 h-12 mx-2" />
                <img src={Figma} alt="Figma" class="w-8 h-12 mx-2" />
                <img src={Nano} alt="Nano" class="w-8 h-12 mx-2" />
                <img src={Notion} alt="Notion" class="w-8 h-12 mx-2" />
                <img src={Tmux} alt="Tmux" class="w-8 h-12 mx-2" />
            </div>
        </div>
    </div>
</div>

<button on:click={() => document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' })} class="absolute bottom-10 left-1/2 transform -translate-x-1/2 hover:fill-gray">
    <CircleArrowDown size="35" />
</button>