import { getMDXData } from 'app/utils/mdx'

import path from 'path'


export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}
