import { fastify, firebaseApp, BASE_URL } from "./init.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
const auth = getAuth(firebaseApp);

// import {BASE_URL} from '../server.js'

fastify.post(BASE_URL+'/user', async (request, reply) => {
    const { email, password } = request.body;
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user)
        reply.send(user);
    } catch (error) {
        reply.send(error);
    }
})
