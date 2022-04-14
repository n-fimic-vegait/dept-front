import { DeptPostModel } from './DeptPostModel'

export type DeptContentSectionModel = {
  _id: string
  type: string
  dept_posts?: DeptPostModel[]
  text_data?: string
}
