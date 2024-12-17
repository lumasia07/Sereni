const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Post Sereni Card
const postCard = async (req, res) => {
  try {
    const { cardText } = req.body;
    const authorId = req.user.userID;

    // Input Validation
    if (!cardText || !authorId) {
      return res.status(400).json({ message: "Text required!" });
    }

    // Check if the author (user) exists
    const user = await prisma.user.findUnique({
      where: { userID: authorId },
    });

    if (!user) {
      return res.status(404).json({ message: "Author not found!" });
    }

    // Create the card
    const newCard = await prisma.card.create({
      data: {
        cardText,
        authorId,
      },
    });

    res.status(201).json({ message: "Card created successfully", card: newCard });
  } catch (error) {
    console.error("Error creating card:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { postCard };
