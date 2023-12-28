# Marchell Personal Web

This is my personal web, built with [SvelteKit](https://kit.svelte.dev).

## Creating a new post

Create a new file with new file format `YYYYMMDD_HHMMSS_post.md` in `src/posts` directory. And add frontmatter to the file.

```bash

echo "---
title: Today's post
description: Hehe.
date: '$(date +%F)'
categories:
  - software-engineering
  - backend
published: true
---
" >> src/posts/"$(date +%Y%m%d_%H%M%S)_post.md"
```


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm run dev
```

## Building

```sh
pnpm run build && pnpm run preview
```

## Need to mention

I followed this post to create thi web: https://joyofcode.xyz/sveltekit-markdown-blog