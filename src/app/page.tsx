import AccountButton from "~/components/auth/account-button";
import SignInButton from "~/components/auth/sign-in-button";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();

  return (
    <header className="mx-auto flex max-w-screen-md items-center justify-between gap-4 p-4">
      <a href="#" className="text-xl font-bold tracking-tighter">
        casino/online
      </a>
      {session?.user ? <AccountButton user={session.user} /> : <SignInButton />}
    </header>
  );
}
