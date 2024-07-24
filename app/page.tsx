import { Categories, Container, Title } from "../components/shared/index";
// !Остановился на времени 58:09
export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
        {/* категории */}
        <Categories />
      </Container>
    </>
  );
}
