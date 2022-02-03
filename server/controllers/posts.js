import {PostMessage} from '../model/postMessage.js';



async function getPosts(req,res) {
    
    try{
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);

    }

    catch(error) {

        res.status(404).json({message: error.message})

    }
}

async function createPosts(req,res) {


    const post = req.body;

    const newPost = new PostMessage(post);

    try {


        await newPost.save();

        res.status(201).json(newPost);

    }

    catch(error) {
        res.status(409).json({message: error.message})

    }

}


export {getPosts, createPosts}