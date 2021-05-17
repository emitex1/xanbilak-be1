import { PrismaClient } from '@prisma/client'

export const readShoppingListItems = async (req: any, res: any) => {
    const prisma = new PrismaClient();
    const items = await prisma.shoppingItem.findMany();
    res.status(200).json(items);
}

export const createShoppingItem = async(req: any, res: any) => {
    const prisma = new PrismaClient();
    const result = await prisma.shoppingItem.create({
        data: {
            title: req.body.title,
            count: 1,
            isBought: false,
            description: 'Mahdiar',
            createDate: new Date()
        }
    })
    res.status(200).json(result);
}
