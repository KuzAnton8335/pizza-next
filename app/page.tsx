import { Container, Filters, Title, TopBar } from "../components/shared/index";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      {/* top-bar */}
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* фильтрация (меню фильтрации) */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Список товаров</div>
          </div>
        </div>
      </Container>
    </>
  );
}
