import { json } from '@sveltejs/kit';
import emailjs from 'emailjs-com';
import { env } from '$env/dynamic/private';

export async function POST(event) {
    const { name, email, message } = await event.request.json();
    const templateParams = {
        name,
        email,
        message
    };

    try {
        if (!env.EMAILJS_SERVICE_ID || !env.EMAILJS_TEMPLATE_ID || !env.EMAILJS_USER_ID) {
            throw new Error('EmailJS environment variables are not properly set.');
        }
        const result = await emailjs.send(env.EMAILJS_SERVICE_ID as string, env.EMAILJS_TEMPLATE_ID as string, templateParams, env.EMAILJS_USER_ID as string);
        console.log(result.text);
        return json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log(String(error));
        }
        return json({ success: false, message: 'Failed to send message. Please try again.' });
    }
}