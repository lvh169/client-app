import { connecttodb } from "./utils";
import { Post } from "./model";


// const users = [
//     {id:1, name: 'John'},
//     {id:2, name: 'Jane'},
// ];

// const posts = [
//     {id:1, title: 'Post 1', body: '.....', userId:1},
//     {id:2, title: 'Post 2', body: '.....', userId:2},
//     {id:3, title: 'Post 3', body: '.....', userId:3},
//     {id:4, title: 'Post 4', body: '.....', userId:4},
// ];

export const getPosts = async () => {
    try{
        connecttodb();
        const posts = await Post.find();
        return posts;
    } catch (err){
    console.log(err);
    throw new Error("Fail to fetch post!");
    }
};

export const getPost = async (slug) => {
    try{
        connecttodb();
        const post= await Post.find({slug});
        return post;
    }catch(err){
        console.log(err);
        throw new Error("Fail to fetch");
    }
};


export const getUser = async (id) => {
    try{
        connecttodb();
        const user= await User.findById(id);
        return user;
    }catch(err){
        console.log(err);
        throw new Error("Fail to fetcnph");
    }
};

export const getUsers = async () => {
    try{
        connecttodb();
        const users= await User.find(id);
        return users;
    }catch(err){
        console.log(err);
        throw new Error("Fail to fetch");
    }
};
