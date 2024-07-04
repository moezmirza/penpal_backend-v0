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
    apiKey: "AIzaSyDg9lIgznBwBJjEtKehcdOjHFW5c3gb2nY",
    authDomain: "penpal-60d8f.firebaseapp.com",
    projectId: "penpal-60d8f",
    storageBucket: "penpal-60d8f.appspot.com",
    messagingSenderId: "603216704327",
    appId: "1:603216704327:web:db5a5a5557695f17d2d262"
};

export const firebaseApp = initializeApp(firebaseConfig)
