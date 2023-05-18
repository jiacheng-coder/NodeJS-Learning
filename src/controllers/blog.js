// 博客相关的方法
const getList = () => {
  return [
    {id: 1,name: 'John',content:'内容1'},
    {id: 2,name: 'Lucy',content:'内容2'},
  ]
}
const getDetail = (id) => {
  return {id: 1,name: 'John',content:'内容1'}
}
const createNewBlog = (blogData)=>{
  console.log("blogData:",blogData);
  return {
    id: 1
  }
}
const updateBlog = (id,blogData={})=>{
  // console.log("id=",id);
  // console.log("blogData=",blogData);
  return false
}
const deleteBlog = (id)=>{
  console.log("id =",id);
  return true
}

module.exports = {
  getList,
  getDetail,
  createNewBlog,
  updateBlog,
  deleteBlog
}
