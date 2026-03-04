"use client";

import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatToRelativeTime } from "./format-dates";

export default function TimeAgo({
  timestamp,
  className,
}: {
  timestamp: string;
  className?: string;
}) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(formatToRelativeTime(timestamp));
    update();
    const interval = setInterval(update, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [timestamp]);

  if (!time) return <span className="text-xs opacity-0">...</span>;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <time
            dateTime={timestamp}
            className={`cursor-default tabular-nums ${className}`}
          >
            {time}
          </time>
        </TooltipTrigger>
        <TooltipContent className="bg-white text-slate-900 border border-slate-200 shadow-sm">
          <p>{new Date(timestamp).toLocaleDateString()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
