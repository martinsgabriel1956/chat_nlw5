import express from "express"

const app = express();

app.get('/', (req, res) => res.json({ message: 'Hello World!' }))

app.post('/users', (req, res) => res.json({ message: 'User saved!' }))


app.listen(3333, () => console.log('Server running 🚀 ') )
