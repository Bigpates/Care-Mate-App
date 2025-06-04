# Care-Mate Chat Widget

This repository provides a minimal AI chat widget backed by a Netlify serverless function using OpenAI's API. The widget can be embedded into any webpage, including Webflow sites.

## Structure
```
chat-app/
  ├── netlify/functions/chat.js  # serverless function
  ├── client/
  │   ├── index.html              # demo page / embed target
  │   ├── chat.js                 # frontend logic
  │   └── styles.css              # basic styles
  └── package.json
```

## Deploying to Netlify
1. Create a new Netlify site and link it to this repository.
2. Set the **Publish directory** to `chat-app/client`.
3. Ensure the environment variable `OPENAI_API_KEY` is configured in Netlify.
4. After deploying, your chat function will be available at `https://<your-site>.netlify.app/.netlify/functions/chat`.

## Embedding in Webflow
Include the following snippet in an Embed element and adjust the `src` URL to your deployed Netlify site:

```html
<iframe src="https://<your-site>.netlify.app/index.html" style="border:none;width:100%;height:400px;"></iframe>
```

The iframe will render the chat UI contained in `client/index.html`.
