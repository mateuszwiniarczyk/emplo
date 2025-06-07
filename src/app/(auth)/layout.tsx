export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container flex flex-auto flex-col justify-center py-10">
      {children}
    </main>
  );
}
