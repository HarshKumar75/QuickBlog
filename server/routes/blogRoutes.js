import express from "express";
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComment, togglePublish } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";
import Blog from "../models/Blog.js";

const blogRouter = express.Router();

blogRouter.get('/admin/blogs', auth, async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 }); // show latest first
        res.json({ success: true, blogs });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

blogRouter.get('/admin/comments', auth, async (req, res) => {
    const comments = await Comment.find().populate('blog').sort({ createdAt: -1 });
    res.json({ success: true, comments });
});


blogRouter.post("/add", upload.single('image'), auth, addBlog)
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/:blogId', getBlogById);
blogRouter.post('/delete', auth, deleteBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish);
blogRouter.post('/add-comment', addComment);
blogRouter.post('/comments', getBlogComment);
blogRouter.post('/generate', auth, generateContent);

export default blogRouter;