import prisma from '@prisma/client';

const db = new prisma.PrismaClient();

export const index = async (req, res) => {
  try {
    const users = await db.user.findMany({
      include: {
        posts: true,
      },
    });

    res.status(200).json({ users });
  } catch (error) {
    return console.log(error);
  }
};

export const show = async (req, res) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        posts: true,
      },
    });

    res.status(200).json({ user });
  } catch (error) {
    return console.log(error);
  }
};

export const create = async (req, res) => {
  try {
    const createdUser = await db.user.create({
      data: req.body,
    });

    res.status(201).json({ createdUser });
  } catch (error) {
    return console.log(error);
  }
};

export const update = async (req, res) => {
  try {
    const updatedUser = await db.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: req.body,
    });

    res.status(201).json({ updatedUser });
  } catch (error) {
    return console.log(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const deletedUser = await db.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json({ deletedUser });
  } catch (error) {
    return console.log(error);
  }
};
