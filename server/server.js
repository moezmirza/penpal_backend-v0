import {fastify} from './routes/init.js'

export const BASE_URL = '/api/v1'

fastify.get(BASE_URL, async () =>{
    return {message:'Welcome to Penpal API'}
})

async function startServer(){
    try{
        fastify.listen(
            { host: '0.0.0.0', port: process.env.PORT || 8000 },
            function (err, address) {
              if (err) {
                fastify.log.error(err)
                process.exit(1)
              } else {
                console.log(`Server is now listening on ${address}`)
              }
            }
          )
    }
    catch(error){
        console.error(error)
        process.exit(1)
    }
}

startServer()