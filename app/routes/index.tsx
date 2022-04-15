import { PrismaClient } from '@prisma/client'
import { getEarthquakes } from '~/lib/earthquake';

export let loader = () => {
  return getEarthquakes();
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
