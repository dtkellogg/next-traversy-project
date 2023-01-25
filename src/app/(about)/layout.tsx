export default function AboutLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <nav></nav> */}
      <h1>About Page</h1>

      {children}
    </section>
  );
}