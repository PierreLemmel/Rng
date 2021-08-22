import express from 'express';
import path from 'path';

const port = process.env.PORT || 3001;

const app = express();

const pathToClient = '../../client/build';
app.use(express.static(path.resolve(__dirname, pathToClient)));


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, pathToClient, 'index.html'));
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})