import getGoogleOAuthUrl from "@/utils/getGoogleUrl";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={getGoogleOAuthUrl()}>Login with Google</Link>
    </main>
  );
}
