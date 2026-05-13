import Header from "@/components/layout/Header";

export default function SubPagesLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
