const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.handler = async (event, context, callback) => {
  try {
    console.log({ env: process.env.DATABASE_URL });
    console.log("edit source to force bundleeeeee");

    const posts = await prisma.post.findMany({
      include: { author: true },
    });

    console.log({ posts });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(posts),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(error),
    };
  }
};
