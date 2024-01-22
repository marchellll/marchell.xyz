import { error } from '@sveltejs/kit'

export async function load({ params }: { params: { slug: string } }) {
	try {
		const post = await import('./homepage.md')

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`)
	}
}
