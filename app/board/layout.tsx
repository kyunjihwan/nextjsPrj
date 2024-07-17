export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; Next JS Board Layout
    </div>
  );
}
