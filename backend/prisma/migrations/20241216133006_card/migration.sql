-- CreateTable
CREATE TABLE `Card` (
    `cardID` CHAR(36) NOT NULL,
    `cardText` VARCHAR(191) NULL,
    `authorId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cardID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`userID`) ON DELETE RESTRICT ON UPDATE CASCADE;
