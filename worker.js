/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    const page = `
    <span>
      <a href="https://www.instagram.com/bonusround.band">bonusround.band</a>
      <br><a href="https://youtu.be/pFSNsVL00ow" style="color:white;">coda set</a>
    </span>
    `

    return new Response(page, {
      headers: { 'Content-Type': 'text/html' },
    });
  },
};