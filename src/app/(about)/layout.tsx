// import Nav from '../../components/Nav'

export default function AboutLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <Nav /> */}
      <h1>About Toshi</h1>

      {children}
    </section>
  );
}