import express from 'express';
import {fileURLToPath} from "url";
import path from 'path';
import fileUpload from 'express-fileupload';
import "dotenv/config";
console.log(process.env)

import {PORT} from './config/index.js';
import router from './router/index.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname + "/public")));
// app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ createParentPath: true }));

app.use(router);

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, ()=>{
    console.log(`Listening at http://localhost:${PORT}`);
});