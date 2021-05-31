import { PrismaClient } from '@prisma/client';

interface BuyableItem {
    id: number,
    title: string,
    count?: number,
    isBought: boolean,
    description?: string,
    createDate: Date,
    updateDate?: Date,
    buyDate?: Date
}

const shoppingItemsData: BuyableItem[] = [
    {
        id: 1,
        title: "سیب",
        count: 2,
        isBought: false,
        description: "ترجیحاً سیب زرد، اگر نداشت سرخ",
        createDate: new Date(2021,1,1),
        updateDate: new Date('2021-01-01'),
    },
    {
        id: 2,
        title: "دفتر یادداشت",
        count: 4,
        isBought: false,
        description: "40 برگ داریم، بیشتر از این باشه",
        createDate: new Date(2021,1,1),
    },
    {
        id: 3,
        title: "هویج",
        isBought: true,
        description: "تمیز باشن",
        createDate: new Date(2021,1,1),
        buyDate: new Date('2021-01-02'),
    },
    {
        id: 4,
        title: "باطری قلمی",
        count: 2,
        isBought: false,
        description: "A++",
        createDate: new Date(2021,1,1),
    },
    {
        id: 5,
        title: "خریدن کتاب های مدرسه نیلوفر برای آغاز سال تحصیلی هزار و سیصد و چهارصد",
        count: 2,
        isBought: false,
        description: "کلاس ششم",
        createDate: new Date(2021,1,1),
    },
    {
        id: 6,
        title: "باطری 4357yh",
        count: 2,
        isBought: true,
        description: "توضیحات اضافه",
        createDate: new Date(2021,1,1),
    },
    {
        id: 7,
        title: "35mn قلمی",
        count: 2,
        isBought: false,
        description: "توضیحات اضافه",
        createDate: new Date(2021,1,1),
    },
    {
        id: 8,
        title: "345 5345",
        count: 2,
        isBought: false,
        description: "توضیحات اضافه",
        createDate: new Date(2021,1,1),
    },
    {
        id: 9,
        title: "ty3 قلمی",
        count: 2,
        isBought: true,
        description: "توضیحات اضافه",
        createDate: new Date(2021,1,1),
    },
    {
        id: 10,
        title: "باطری 43u35",
        count: 2,
        isBought: false,
        description: "توضیحات اضافه",
        createDate: new Date(2021,1,1),
    },
    {
        id: 11,
        title: "ehj45 قلمی",
        count: 2,
        isBought: false,
        description: "توضیحات اضافه",
        createDate: new Date(2021,1,1),
    },
    {
        id: 12,
        title: "باطری her",
        count: 2,
        isBought: false,
        description: "توضیحات اضافه",
        createDate: new Date(2021,1,1),
    },
    {
        id: 13,
        title: "sdf قلمی",
        count: 2,
        isBought: false,
        description: "توضیحات اضافه",
        createDate: new Date(2021,1,1),
    },
    {
        id: 14,
        title: "باطری sdf",
        count: 2,
        isBought: false,
        description: "توضیحات اضافه",
        createDate: new Date(2021,1,1),
    },
    {
        id: 15,
        title: "باطری her",
        count: 2,
        isBought: true,
        description: "توضیحات اضافه",
        createDate: new Date(2021,1,1),
    },
    {
        id: 16,
        title: "sdf قلمی",
        count: 2,
        isBought: false,
        description: "توضیحات اضافه",
        createDate: new Date(2021,1,1),
    },
    {
        id: 17,
        title: "باطری sdf",
        count: 2,
        isBought: false,
        description: "توضیحات اضافه",
        createDate: new Date(2021,1,1),
    },
]

const insertInitialData = async () => {
    const prisma = new PrismaClient();

    // Delete previous shopping items
    const deleteResult = await prisma.shoppingItem.deleteMany();
    console.log('Delete Result=', deleteResult);

    // Insert shopping items in the list
    shoppingItemsData.forEach( async (item, index) => {
        const result = await prisma.shoppingItem.create({
            data: {
                title: item.title,
                count: item.count,
                isBought: item.isBought,
                description: item.description,
                createDate: item.createDate,
                updateDate: item.updateDate
            }
        });
        console.log('#' + index + ':');
        console.log(result);
        console.log('-------------------------');
    })

    console.log('Finish inserting new items');
}

insertInitialData();
