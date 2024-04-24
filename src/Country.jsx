import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

//return Card!!!

export default function Country(props) {
  const { name, flag } = props.data;
  return (
    <div>
      <p>
        {flag} {name.common}
      </p>
    </div>
  );
}
