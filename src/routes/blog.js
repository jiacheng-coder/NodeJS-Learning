const { getList, getDetail, createNewBlog, updateBlog, deleteBlog } = require("../controllers/blog")
const { SuccessModel, ErrorModel } = require("../model/responseModel")

const handleBlogRoute = (req,res)=>{
  const method = req.method
  const id = req.query.id;
  const blogData = req.body
  // 获取博客列表
  if (method === 'GET'&&req.path==='/api/blog/list'){
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author,keyword)
    return new SuccessModel(listData)
  }
  // 获取博客详情
  if (method === 'GET'&&req.path==='/api/blog/detail'){
    const detail = getDetail(id)
    return new SuccessModel(detail)
  }
  // 新建博客
  if (method === 'POST'&&req.path==='/api/blog/new'){
    const newBlogData = createNewBlog(blogData)
    return new SuccessModel(newBlogData)
  }
  // 更新博客
  if (method === 'POST'&&req.path==='/api/blog/update'){
    const flag = updateBlog(id,blogData) // 返回值为boolean
    if (flag) {
      return new SuccessModel("更新成功～")
    }else {
      return new ErrorModel("更新失败！")
    }
  }
  // 删除博客
  if (method === 'POST'&&req.path==='/api/blog/delete'){
    const flag = deleteBlog(id)
    if (flag) {
      return new SuccessModel("删除成功～")
    }else {
      return new ErrorModel("删除失败！")
    }
  }
}
module.exports = handleBlogRoute
