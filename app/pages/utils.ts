import { getMDXData } from 'app/utils/mdx'

import path from 'path'


export function getPagePosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'pages', 'posts'))
}
