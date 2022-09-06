import Post from './Post.js';
import PostService from './PostService.js';

class PostController {
	async create(req, res) {
		try {
			const post = await PostService.create(req.body);
			res.json(post);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async getAll(req, res) {
		try {
			const posts = await Post.find();
			return res.json(posts);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async getOne(req, res) {
		try {
			const { id } = req.params;
			if (!id) {
				return res.status(400).json({ message: 'bad request' });
			}
			const post = await Post.findById(id);
			return res.json(post);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async update(req, res) {
		try {
			const post = req.body;
			if (!post._id) {
				return res.status(400).json({ message: 'bad request' });
			}
			const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
			return res.json(updatedPost);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async delete(req, res) {
		try {
			const { id } = req.params;
			if (!id) {
				return res.status(400).json({ message: 'bad request' });
			}
			const deletedPost = await Post.findByIdAndDelete(id);
			return res.json(deletedPost);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

export default new PostController();
