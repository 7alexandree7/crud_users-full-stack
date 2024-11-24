import express, {Request, Response} from 'express';

const app = express();

app.post('/users', (req:Request, res:Response) => {
    console.log(req)
    res.send('okay')
})

app.get('/users', (req:Request, res:Response) => {
    res.send('Deu bom')
})

app.listen(3000)