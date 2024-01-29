import Card from "./Card";
export default function Services() {
  return (
    <section  className="h-screen md:h-96 flex flex-col items-center bg-white" id="services">
      <h1 className="text-5xl text-gray-400 mt-7">Our Services</h1>
      <div className=" h-full w-full flex flex-col md:flex-row justify-evenly items-center">
        <Card
          src={require("../../../public/img/commercial.jpeg")}
          alt="commercial"
          service="Commercial"
          href="/commercial"
        />

        <Card
          src={require("../../../public/img/residential.jpeg")}
          alt="residential"
          service="Residential"
          href="/residential"
        />
      </div>
    </section>
  );
}
