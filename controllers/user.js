import prisma from '@prisma/client';

const db = new prisma.PrismaClient();

export const index = async (req, res) => {
  res.send('hello');
};
