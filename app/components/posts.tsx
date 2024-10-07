import Link from 'next/link'
import { getBlogPosts } from 'app/blog/utils'
import { formatDate } from 'app/utils/date'

import * as _ from 'lodash'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {_.sortBy(allBlogs, ['filename']).reverse()

        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-2"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[150px] tabular-nums">
                {formatDate(post.metadata.date, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                <span>{post.metadata.title}</span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400"> - {post.metadata.description}</span>
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
