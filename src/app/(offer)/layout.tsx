export default function OfferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container flex flex-auto flex-col py-10">{children}</main>
  );
}
