import "dotenv/config";
import { PrismaClient } from "@/generated/prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    const passwordHash = await bcrypt.hash(
        "Admin@123456",
        12
    );

    await prisma.adminUser.upsert({
        where: {
            email: "admin@domestictravel.com",
        },
        update: {
            name: "Admin",
            passwordHash,
            isActive: true,
        },
        create: {
            name: "Admin",
            email: "admin@domestictravel.com",
            passwordHash,
            isActive: true,
        },
    });

    console.log(
        "Admin user created/updated successfully"
    );
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });