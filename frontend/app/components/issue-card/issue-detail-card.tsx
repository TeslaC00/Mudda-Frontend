"use client";

import { IssueCardProps } from "@/app/feed/type";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import CommentFeed from "../comments/comment-feed";
import { CommentInput } from "../comments/comment-input";
import IssueCardFooter from "./issue-card-footer";
import IssueCardHeader from "./issue-card-header";
import { useState } from "react";
import MediaPreview from "../media-preview";

export default function IssueDetailCard(props: IssueCardProps) {
  const [showComments, setShowComments] = useState(true);

  return (
    <Card className="min-w-2xs max-w-2xl gap-3 py-4 relative">
      <IssueCardHeader {...props} />
      <IssueCardBody {...props} />
      <MediaPreview images={props.images} className="rounded-none" />
      <Collapsible open={showComments} onOpenChange={setShowComments}>
        <IssueCardFooter {...props} />
        <CollapsibleContent
          className="px-3 relative z-10 overflow-hidden 
          data-[state=open]:animate-accordion-down 
          data-[state=closed]:animate-accordion-up"
        >
          <CommentInput />
          <CommentFeed parentId={props.id} type="comments" pageSize={3} />
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

function IssueCardBody({ title, desc }: IssueCardProps) {
  return (
    <CardContent>
      <CardTitle className="font-bold text-xl pb-1.5">{title}</CardTitle>
      <CardDescription>{desc}</CardDescription>
    </CardContent>
  );
}
