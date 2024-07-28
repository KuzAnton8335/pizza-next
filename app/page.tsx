import { Container, Title, TopBar } from "../components/shared/index";
// !остановился на времени 1:04:31
export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      {/* top-bar */}
      <TopBar />
      <div style={{ height: "3000px" }} />
    </>
  );
}
