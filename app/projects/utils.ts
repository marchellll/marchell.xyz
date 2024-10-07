
import path from 'path'

import { getMDXData } from 'app/utils/mdx'


export function getProjectPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'projects', 'posts'))
}
