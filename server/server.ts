import express, { json, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

interface Idata {
    id: any,
    name: string,
    age: string,
    profession: string
}

const prisma = new PrismaClient()
const app = express();
app.use(express.json())

//---------------------------------------------------------------------------------------------------------------------
app.post('/users', async (req: Request<{}, {}, Idata>, res: Response) => {
    try {
        const { name, age, profession } = req.body;

        // Criação no banco de dados usando Prisma
        const newUser = await prisma.user.create({
            data: {
                name,
                age,
                profession,
            },
        });
        res.status(201).json(newUser);
    } 

    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
})
//---------------------------------------------------------------------------------------------------------------------

app.put('/users/:id', async (req: Request<{ id: string | any }>, res: Response) => {
    try {
        const { name, age, profession } = req.body

        const updateUsers = await prisma.user.update({
            where: {
                id: req.params.id
            },
            data: {
                name,
                age,
                profession,
            },
        })

        res.status(201).json(updateUsers)
    }

    catch (error) {
        console.error(error + 'Não foi possivel Editar o usuario');
        res.status(500).json({ error: 'Erro editar o usuario' });
    }
})
//---------------------------------------------------------------------------------------------------------------------

app.delete('/users/:id', async (req: Request<{ id: string | any }>, res: Response) => {
    try {
         await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({message: 'Usuario deletado com sucesso'})
    }

    catch (error) {
        console.error(error + 'Não foi possivel deletar o usuario')
        res.status(500).json({ error: 'Erro ao deletar um  usuário' });
    }
})


app.get('/users', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()
    res.status(200).json(users);
})
//---------------------------------------------------------------------------------------------------------------------

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});