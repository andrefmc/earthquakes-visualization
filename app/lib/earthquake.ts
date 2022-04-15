import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getEarthquakes() {
    await prisma.$connect()

    const allPosts = await prisma.earthquake.findMany();
    prisma.$disconnect();

    console.log(allPosts)

    return allPosts;
}