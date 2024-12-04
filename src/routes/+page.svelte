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

    //social icons
    import Bluesky from '../icons/social/bluesky.svg?url';
    import Discord from '../icons/social/discord.svg?url';
    import GitHub from '../icons/social/github.svg?url';
    import { redirect } from '@sveltejs/kit';

    async function handleSubmit(event: Event) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const response = await fetch('/sendemail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            })
        });

        const result = await response.json();
        document.getElementById('response-message')!.textContent = result.message;
    }
</script>

<div class="flex flex-col justify-center items-center min-h-screen px-4 bg-base-100">
    <div class="text-center px-4">
        <h1 class="font-semibold text-5xl">Cloudy</h1>
        <h3 class="text-lg font-semibold mt-3 max-w-3xl mx-auto">A software developer who makes websites. View my projects below!</h3>
        <button class="btn btn-primary w-44 mt-5 text-lg font-semibold" on:click={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Explore Projects</button>
    </div>
</div>
 
<div class="flex flex-col justify-center items-center min-h-screen py-10 bg-base-100 px-4" id="aboutme">
    <h1 class="font-semibold text-5xl mb-6">About Me</h1>
    <p class="text-lg font-semibold mt-5 max-w-3xl mx-auto text-center">
        I'm a software developer with experience in system management, web development, and cloud computing. I make small web apps that solve small but useful problems.
    </p>

    <h2 class="font-semibold text-3xl mt-10 mb-4">Skills & Technologies</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-center">
        <div class="p-4 bg-base-300 shadow-md rounded-lg">
            <h3 class="font-semibold text-xl">Languages</h3>
            <div class="flex flex-wrap justify-center">
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
            <div class="flex flex-wrap justify-center">
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

<div class="flex flex-col justify-center items-center min-h-screen py-10 bg-base-100 px-4" id="projects">
    <h1 class="font-semibold text-5xl mb-6">Projects</h1>
    <p class="text-lg font-semibold mt-5 max-w-3xl mx-auto text-center">
        A couple of open source websites ive made for fun, check them out!
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
        <div class="p-4 bg-base-300 shadow-md rounded-lg">
            <img src="/capsule.png" alt="Project 1" class="w-full h-40 object-cover rounded-lg">
            <h3 class="font-semibold text-xl mt-4">Time Capsule</h3>
            <p class="text-sm text-gray-600 mt-2">
                A cool website that allows you to store a message then lock it until a future date using local storage
            </p>
            <a href="https://capsule.cloudyio.me" class="btn btn-secondary mt-9">View Project</a>
        </div>
    
        <div class="p-4 bg-base-300 shadow-md rounded-lg">
            <img src="/dishdash.png" alt="Project 2" class="w-full h-40 object-cover rounded-lg">
            <h3 class="font-semibold text-xl mt-4">Dish Dash</h3>
            <p class="text-sm text-gray-600 mt-2">
                Mainly a test project, grabs a random recipe from an API and wraps it in a UI
            </p>
            <a href="https://dishdash.cloudyio.me" class="btn btn-secondary mt-9">View Project</a>
        </div>
    
        <div class="p-4 bg-base-300 shadow-md rounded-lg">
            <img src="/logify.png" alt="Project 2" class="w-full h-40 object-cover rounded-lg">
            <h3 class="font-semibold text-xl mt-4">Logify - WIP</h3>
            <p class="text-sm text-gray-600 mt-2">
                Logify is a leet code style website that allows you to solve problems to boost your algorithmic thinking.
            </p>
            <a href="https://github.com/cloudyio/logify" class="btn btn-secondary mt-4">View Repository</a>
        </div>
    </div>
</div>

<div class="flex flex-col justify-center items-center min-h-screen py-10 bg-base-100 px-4" id="blog">
    <h1 class="font-semibold text-5xl mb-6">Blog</h1>
    <p class="text-lg font-semibold mt-5 max-w-3xl mx-auto text-center">
        Read my latest blog posts about web development, cloud computing, and more!
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
        <!-- Example blog post -->
        <div class="p-4 bg-base-300 shadow-md rounded-lg">
            <img src="/blog1.png" alt="Blog Post 1" class="w-full h-40 object-cover rounded-lg">
            <h3 class="font-semibold text-xl mt-4">Understanding Svelte</h3>
            <p class="text-sm text-gray-600 mt-2">
                A deep dive into the Svelte framework and why it's a great choice for modern web development.
            </p>
            <a href="/blog/understanding-svelte" class="btn btn-secondary mt-4">Read More</a>
        </div>
        <!-- Add more blog posts as needed -->
    </div>
</div>

<div class="flex flex-col justify-center items-center min-h-screen py-10 bg-base-100 px-4" id="contact">
    <h1 class="font-semibold text-5xl mb-6">Contact me!</h1>
    <div class="flex flex-col md:flex-row items-center w-full max-w-4xl">
        <div class="card bg-base-300 text-primary-content w-full">
            <div class="card-body">
                <h2 class="card-title">Feel free to contact me with any questions below:</h2>
                <form id="contact-form" method="POST" action="https://formsubmit.co/9cd2539d7aed8d2302bd2495c8ce139f">
                    <div class="form-control mb-4">
                        <label class="label" for="name">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" name="name" id = "name" class="input input-bordered" required />
                    </div>
                    <div class="form-control mb-4">
                        <label class="label" for="email">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your email" name="email" id = "email" class="input input-bordered" required />
                    </div>
                    <div class="form-control mb-4">
                        <label class="label" for="message">
                            <span class="label-text">Message</span>
                        </label>
                        <textarea placeholder="Your message" name="message" id="message" class="textarea textarea-bordered h-48" required></textarea>
                    </div>
                    <div class="card-actions justify-between">
                        <div class="flex items-center">
                            <a href="https://bsky.app/profile/cloudyio.me" target="_blank" class="mr-4">
                                <img src={Bluesky} alt="Bluesky" class="w-8 h-8 mt-2" />
                            </a>
                            <a href="https://discord.com/users/718586906987724832" target="_blank" class="mr-4">
                                <img src={Discord} alt="Discord" class="w-8 h-8 mt-2" />
                            </a>
                            <a href="https://github.com/cloudyio" target="_blank" class="mr-4">
                                <img src={GitHub} alt="GitHub" class="w-8 h-8 mt-2" />
                            </a>
                        </div>
                        <button type="submit" class="btn btn-primary">Send</button>
                    </div>
                </form>
                <p id="response-message" class="mt-4 text-center"></p>
            </div>
        </div>
    </div>
</div>

<button on:click={() => document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' })} class="absolute bottom-10 left-1/2 transform -translate-x-1/2 hover:fill-gray">
    <CircleArrowDown size="35" />
</button>