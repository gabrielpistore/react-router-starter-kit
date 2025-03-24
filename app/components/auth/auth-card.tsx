import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function AuthCard({
  description,
  title,
  children,
}: {
  description: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="font-comfortaa text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
