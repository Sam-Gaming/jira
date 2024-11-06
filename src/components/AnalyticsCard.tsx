import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

interface AnalyticsCardProps {
  title: string;
  value: number;
  variant: "up" | "down";
  increasedValue: number;
}

export const AnalyticsCard = ({
  title,
  value,
  variant,
  increasedValue,
}: AnalyticsCardProps) => {
  const iconColor = variant === "up" ? "text-emerald-500" : "text-red-500";
  const increasedValueColor =
    variant === "up" ? "text-emerald-500" : "text-red-500";

  const Icon = variant === "up" ? FaCaretUp : FaCaretDown;

  return (
    <Card className="border-none shadow-none w-full">
      <CardHeader>
        <div className="flex items-center gap-x-2.5">
          <CardDescription className="flex items-center gap-x-2 font-medium overflow-hidden">
            <span className="truncate text-base">{title}</span>
          </CardDescription>

          <div className="flex items-center gap-x-1">
            <Icon className={cn(iconColor, "size-4")} />
            <span
              className={cn(
                increasedValueColor,
                "truncate text-base font-medium"
              )}
            >
              {increasedValue}
            </span>
          </div>
        </div>

        <CardTitle className="3xl font-semibold">
          {value}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
