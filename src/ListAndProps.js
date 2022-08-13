import ListAndPropsProvider from "./ListAndPropsProvider";

export default function ListAndProps() {
  const cars = [
    { brand: "Ford", id: "1" },
    { brand: "BMW", id: "2" },
    { brand: "Volvo", id: "3" },
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      {cars.map((car) => (
        <ListAndPropsProvider brand={car.brand} key={car.id} />
      ))}
    </>
  );
}
