import { fastify, firebaseApp, BASE_URL } from "./init.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
const auth = getAuth(firebaseApp);

import User from '../models/user.js'

// import {BASE_URL} from '../server.js'

fastify.post(BASE_URL+'/user', async (request, reply) => {
    const { email, password, fullname } = request.body;
    try {
        const fb_user = await createUserWithEmailAndPassword(auth, email, password)
        const user = await User.create({
            email,
            password,
            fullname,
            firebase_uid: fb_user.user.uid
        })
        reply.status(201).send({
            data:user,
            event_code:1,
            message:"User created successfully",
            status_code:201
        })
    } catch (error) {
        reply.status(500).send({
            data:null,
            event_code:0,
            message:error._message,
            status_code:500
        })
    }
})
