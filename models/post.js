import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        author: { type: String, required: true },
        imgUrl: { type: String, required: false}
    },
    { timestamps: true },
)

export default mongoose.model('posts', Post)
