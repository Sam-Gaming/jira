import { ProjectAnalyticsReponseType } from "@/features/projects/api/use-get-project-analytics";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { AnalyticsCard } from "./AnalyticsCard";
import { DottedSeparator } from "./dotted-separator";

// interface AnalyticsProps {
//   data?: {
//     taskCount: number;
//     taskDifference: number;
//     projectCount?: number;
//     projectDifference?: number;
//     assignedTaskCount: number;
//     assignedTaskDifference: number;
//     completedTaskCount: number;
//     completedTaskDifference: number;
//     incompleteTaskCount?: number;
//     incompleteTaskDifference?: number;
//     overdueTaskCount: number;
//     overdueTaskDifference: number;
//   };
// }

export const Analytics = ({ data }: ProjectAnalyticsReponseType) => {
  return (
    <ScrollArea className="border rounded-lg w-full whitespace-nowrap shrink-0">
      <div className="w-full flex flex-row">
        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Total tasks"
            value={data.taskCount}
            variant={data.taskDifference > 0 ? "up" : "down"}
            increasedValue={data.taskDifference}
          />
          <DottedSeparator direction="vertical" />
        </div>

        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Assigned tasks"
            value={data.assignedTaskCount}
            variant={data.assignedTaskDifference > 0 ? "up" : "down"}
            increasedValue={data.assignedTaskDifference}
          />
          <DottedSeparator direction="vertical" />
        </div>

        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Completed tasks"
            value={data.completedTaskCount}
            variant={data.completedTaskDifference > 0 ? "up" : "down"}
            increasedValue={data.completedTaskDifference}
          />
          <DottedSeparator direction="vertical" />
        </div>

        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Overdue tasks"
            value={data.overdueTaskCount}
            variant={data.overdueTaskDifference > 0 ? "up" : "down"}
            increasedValue={data.overdueTaskDifference}
          />
          <DottedSeparator direction="vertical" />
        </div>

        <div className="flex items-center flex-1">
          <AnalyticsCard
            title="Incomplete tasks"
            value={data.incompleteTaskCount}
            variant={data.incompleteTaskDifference > 0 ? "up" : "down"}
            increasedValue={data.incompleteTaskDifference}
          />
          <DottedSeparator direction="vertical" />
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
