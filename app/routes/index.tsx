import { PrismaClient } from '@prisma/client'

export async function loader() {
  const prisma = new PrismaClient();
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  await prisma.$disconnect();
  return allUsers;
}
export default function Index() {

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          Ayo Mate
        </li>
      </ul>
    </div>
  );
}
