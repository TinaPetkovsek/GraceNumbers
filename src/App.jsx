import { useEffect, useState } from "react";
import Random from "./Random";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Country from "./Country";

export default function App() {
  const [fact, setFact] = useState({});
  const [number, setNumber] = useState(0);
  const [countries, setCountries] = useState([
    "Slovenia",
    "France",
    "Germany",
    "Italy",
    "Spain",
  ]);
  const [colors, setColors] = useState([
    "green",
    "red",
    "blue",
    "pink",
    "orange",
  ]);

  const [region, setRegion] = useState("Europe");

  async function getRandomFact() {
    const response = await fetch("http://numbersapi.com/random?json");
    const data = await response.json();
    setFact(data);
  }

  async function getNumberFact(number) {
    const response = await fetch("http://numbersapi.com/" + number + "?json");
    const data = await response.json();
    setFact(data);
  }

  async function getCountries() {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flag,borders,region",
    );
    const data = await response.json();
    setCountries(data);
  }

  useEffect(() => {
    getRandomFact();
    getCountries();
  }, []);

  useEffect(() => {
    getNumberFact(number);
  }, [number]);

  return (
    <div className="container">
      <h1 className="p-6 text-xl">My Numbers and Countries</h1>
      <h2 className="p-3 text-xl">Region: {region}</h2>

      <Select onValueChange={(value) => setRegion(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a region" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Europe">Europe</SelectItem>
          <SelectItem value="Asia">Asia</SelectItem>
          <SelectItem value="Africa">Africa</SelectItem>
          <SelectItem value="Americas">Americas</SelectItem>
          <SelectItem value="Oceania">Oceania</SelectItem>
        </SelectContent>
      </Select>

      <Carousel>
        <CarouselContent>
          {countries
            //.filter((country) => country.length <= 5) //izpisemo le drzave, ki imajo 5 ali manj crk
            .filter((country) => country.region == region)
            .map((country) => (
              <CarouselItem className="basis-1/3">
                <Country data={country}></Country>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {colors.map((color) => (
        <p>{color}</p>
      ))}

      <Input
        placeholder="Vnesi stevilo, ki te zanima..."
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      ></Input>

      <Random fact={fact}></Random>
    </div>
  );
}
