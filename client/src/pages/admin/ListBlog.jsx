import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogtableItem from '../../components/admin/BlogtableItem'
import { useAppContext } from '../../context/AppContext';

const ListBlog = () => {

    const [blogs, setBlogs] = useState([]);

    const {axios} = useAppContext()

    const fetchBlogs = async () => {
        try {
            const {data} = await axios.get('/api/blog/admin/blogs')
            if(data.success){
                setBlogs(data.blogs)
            }else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(()=> {
        fetchBlogs()
    },[])
  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
      <h1>All Blogs</h1>
      <div className='relative h-4/5 max-w-4xl oveflow-x-auto overflow-y-auto shadow rounded-lg
            scrollbar-hide bg-white'>
                <table className='w-full text-sm text-gray-500'>
                    <thead className='text-xs text-gray-600 text-left uppercase'>
                        <tr>
                            <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                            <th scope='col' className='px-2 py-4'>Blog Title</th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                            <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                            <th scope='col' className='px-2 py-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog, index)=>{
                            return <BlogtableItem key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index + 1} />
                        })}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default ListBlog
