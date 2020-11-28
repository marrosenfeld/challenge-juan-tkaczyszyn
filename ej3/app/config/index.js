const argv = require('minimist')(process.argv.slice(2));
const isDev = process.env.NODE_ENV !== 'production';

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';
const port = argv.port || process.env.PORT || 3000;


console.log('config select', isDev, prettyHost);
// Load different configs for production, qa or development
let configFile = 'local';
if (isDev && prettyHost != 'localhost'){
  configFile = 'dev';
} else if (!isDev){
  configFile = 'prod';
}
export const params = require(`./config.${configFile}.js`);


export const delayLoadingComponentTime = 500;
