import { DeptImageModel } from './DeptImageModel'

export type DeptPostModel = {
  _id: string
  title: string
  source: string
  cover_image: DeptImageModel[]
}
