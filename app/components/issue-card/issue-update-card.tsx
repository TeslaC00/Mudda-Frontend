"use client";

import TimeAgo from "@/app/components/time-ago";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MediaPreview from "@/app/components/media-preview";

export default function IssueUpdateCard({ update }: any) {
  return (
    // Different padding to reduce extra bottom space due to collapsible
    <Card className="gap-2 pt-3 pb-0 max-w-md relative drpo-shadow-sm">
      <div
        className="absolute top-4 -left-1.5 z-10 w-3 h-3 bg-white border-l border-b 
      border-slate-200 transform rotate-45"
      />
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle className="text-sm font-bold">{update.title}</CardTitle>
          <Badge
            variant="secondary"
            className="bg-blue-50 text-blue-700 uppercase font-bold text-[10px]"
          >
            Official
          </Badge>
        </div>
        <CardAction>
          <TimeAgo className="text-xs text-slate-400" timestamp={update.date} />
        </CardAction>
        <span className="text-xs text-slate-500">{update.author}</span>
      </CardHeader>
      <CardContent className="space-y-3">
        <CardDescription className="text-slate-700">
          {update.desc}
        </CardDescription>
        <MediaPreview images={update.images} layout="single" />
      </CardContent>
      <CardFooter>
        <div className="flex text-slate-500 items-center">
          <Button variant="ghost" size="sm" className="text-xs">
            <ThumbsUp />
            <span>{update.likes} Helpful</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
