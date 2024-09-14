import express from "express";
import {User} from "../models/userModel.js";
import bcrypt from 'bcrypt';

const router = express.Router();

// Post users
router.post('/register', async (request, response) => {
    try {
        // Create object literal
        //TODO: set default values for icon and activity when inputs are not given!
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(request.body.password, salt)
        console.log(hashedPassword)

        const newUser = {
            username: request.body.username,
            email: request.body.email,
            password: hashedPassword
        };

        const userExists = await User.findOne({email: request.body.email})

        if(userExists) {
            response.status(400).send({message: 'User already exists'})
        } else {
            const user = await User.create(newUser); // Use object literal to create new user using model
            return response.status(201).json({
                _id : user._id,
                username: request.body.username,
                email: request.body.email,
                password: hashedPassword
            });
        }
    }catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//for checking login validity for now
router.post('/login', async (request, response) => {
    try {
        const user = await User.findOne({email: request.body.email});

        if (user && await bcrypt.compare(request.body.password, user.password)) {
            console.log(user._id);
            return response.json({
                verdict : 1, // 1 for true or accepted login
                _id : user._id
            })
        }

        return response.json({
            verdict : 0 // 0 for false or failed login
        })
    }catch (error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Get all users
router.get('', async (request, response) => {
    try{
        const users = await User.find({});
        return response.status(200).json({
            count : users.length,
            data : users
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Get user by id
router.get('/:id', async (request, response) => {
    try{
        const id = request.params.id;
        const user = await User.findById(id);
        return response.status(200).json(user);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Update user
//TODO: need to revisit this function
router.put('/:id', async (request, response) => {
    try{
        const id = request.params.id; // getting id from the parameters

        if (request.body.password !== undefined) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(request.body.password, salt)
            console.log(hashedPassword)
        }

        const result = await User.findByIdAndUpdate(id, request.body); // uses the object literal to update the values present with the id
        if (!result){
            return response.status(404).json({message : 'User not found'});
        }
        return response.status(200).json(request.body);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

//Delete user
router.delete('/:id', async (request, response) => {
    try{
        const id = request.params.id;
        const result = await User.findOneAndDelete(id);

        if (!result){
            return response.status(404).json({message : 'User not found'});
        }
        return response.status(200).json({message : 'User deleted successfully'});
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

router.delete('', async (request, response) => {
    try {
        const result = await User.deleteMany({});
        if (!result){
            return response.status(404).json({message: "Deletion not successful"});
        }
        return response.status(200).json({message: "Deleted " + result.deletedCount + " doocuments"});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

export default router;