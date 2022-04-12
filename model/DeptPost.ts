import { DeptImage } from './DeptImage'

export type DeptPost = {
  _id: string
  title: string
  source: string
  cover_image: DeptImage[]
}
