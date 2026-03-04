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
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { ThumbsUp, Reply, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import MediaPreview from "@/app/components/media-preview";
import CommentFeed from "@/app/components/comments/comment-feed";
import { CommentInput } from "@/app/components/comments/comment-input";

export default function NewIssueUpdateCard({ update }: any) {
  const [showInput, setShowInput] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const toggleInput = () => setShowInput(!showInput);
  const toggleComments = () => setShowComments(!showComments);

  return (
    // Different padding to reduce extra bottom space due to collapsible
    <Card className="gap-2 pt-3 pb-0 max-w-md relative drop-shadow-sm">
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
          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
            onClick={toggleInput}
          >
            <Reply />
            <span>Comment</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
            onClick={toggleComments}
          >
            <span>Comments</span>
            <ChevronDown />
          </Button>
        </div>
      </CardFooter>
      <Collapsible open={showInput} onOpenChange={setShowInput}>
        <CollapsibleContent
          className="px-6 overflow-hidden 
          data-[state=open]:animate-accordion-down 
          data-[state=closed]:animate-accordion-up"
        >
          <CommentInput />
        </CollapsibleContent>
      </Collapsible>
      <Collapsible open={showComments} onOpenChange={setShowComments}>
        <CollapsibleContent
          className="px-6 overflow-hidden 
          data-[state=open]:animate-accordion-down 
        data-[state=closed]:animate-accordion-up"
        >
          <CommentFeed
            parentId={update.id}
            type="comments"
            initialComments={update.comments}
          />
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
