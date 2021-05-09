import { PrismaClient } from '@prisma/client'

export const readShoppingItems = async (req: any, res: any) => {
    const prisma = new PrismaClient();
    const sic = await prisma.shopping_items.count();
    res.status(200).json({ shopping_items_count: sic });
}
