import Fastify from 'fastify';
import cors from '@fastify/cors'
import { initializeApp } from 'firebase/app';

export const fastify = Fastify({logger: true});

export const BASE_URL = '/api/v1'

await fastify.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID
};

export const firebaseApp = initializeApp(firebaseConfig)
