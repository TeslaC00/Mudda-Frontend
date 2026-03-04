"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import IssueCardHeader from "./issue-card-header";
import IssueCardFooter from "./issue-card-footer";
import { IssueCardProps } from "@/app/feed/type";
import { CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { CommentInput } from "../comments/comment-input";
import CommentFeed from "../comments/comment-feed";
import MediaPreview from "../media-preview";

export default function IssueCard(props: IssueCardProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <Card className="min-w-2xs max-w-2xl gap-3 py-4 cursor-pointer relative">
      <Link href={`/feed/${props.id}`} className="absolute inset-0 z-0" />

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
          <CommentFeed parentId={props.id} type="comments" pageSize={1} />
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}

function IssueCardBody({ title, desc }: IssueCardProps) {
  return (
    <CardContent>
      <CardTitle className="font-bold text-xl pb-1.5">{title}</CardTitle>
      <CardDescription className="line-clamp-2">{desc}</CardDescription>
    </CardContent>
  );
}
