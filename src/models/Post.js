import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
    },
     content: {
        type: String,
        required: true,
     },

     image: {
        type: String,
        required: true,
     }
}, {timestamps: true});

export default mongoose.model("Post", postSchema);