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
  const { name, flag, flags } = props.data;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {flag} {name.common}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <img src={flags.png}></img>
      </CardContent>
    </Card>
  );
}
