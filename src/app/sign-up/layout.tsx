export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="container flex flex-auto flex-col justify-center py-10">
        {children}
      </main>
      <footer className="flex h-16 items-center justify-center bg-gray-800 text-white">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </footer>
    </>
  );
}
