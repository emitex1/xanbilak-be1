import { PrismaClient } from '@prisma/client'

export const readShoppingListItems = async (req: any, res: any) => {
    const prisma = new PrismaClient();
    const items = await prisma.shopping_items.findMany();
    res.status(200).json(items);
}
