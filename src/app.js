import { envs } from './config/env.js'
//const { envs } = require('./config/env'); Sin usar módulos

import { startServer } from './server/server.js'
//const { startServer } = require('./server/server')


const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// Función agnóstica autoconvocada
// Agnóstica por qeu no tiene nombre
// Autoconvocada porque la ejecutamos con los paréntesis

(async() => {
    main()
})()