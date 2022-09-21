const path = require('path');
const fs = require('fs');

const env = process.env.ENV;
const envPath = path.resolve(process.cwd(), `.${env}.env`);
const defaultEnvPath = path.resolve(process.cwd(), '.env');
const env_config = require('dotenv').config({
    path: fs.existsSync(envPath) ? envPath : defaultEnvPath,
});
const config = env_config.parsed;


module.exports = {config }