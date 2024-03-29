import { error } from '@sveltejs/kit'

export const prerender = 'auto'

export async function load({ params }: { params: { slug: string } }) {
	try {
		const post = await import(`../../../blogs/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}
