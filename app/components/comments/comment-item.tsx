"use client";

import AvatarWrapper from "../avatar-wrapper";
import { useState } from "react";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { CommentInput } from "./comment-input";
import CommentHeader from "./comment-header";
import CommentActions from "./comment-actions";
import CommentFeed from "./comment-feed";

export default function CommentItem({
  authorName,
  createdAt,
  commentId,
  replyCount,
  isReply = false,
  content,
}: {
  authorName: string;
  createdAt: string;
  commentId: number;
  replyCount: number;
  isReply?: boolean;
  content: string;
}) {
  const [showReplies, setShowReplies] = useState(false);
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="flex gap-3 py-2">
      <AvatarWrapper name="Tesla C00" />
      <div className="flex-1">
        {/* Header */}
        <CommentHeader authorName={authorName} createdAt={createdAt} />
        <p className="text-sm text-foreground">{content}</p>

        {/* Footer */}
        <CommentActions
          replyCount={replyCount}
          toggleInput={() => setShowInput(!showInput)}
          showReplies={showReplies}
          toggleReplies={() => setShowReplies(!showReplies)}
        />

        {/* Reply input */}
        <Collapsible open={showInput}>
          <CollapsibleContent
            className="overflow-hidden data-[state=open]:animate-fade-slide-down 
          data-[state=closed]:animate-fade-slide-up"
          >
            <CommentInput />
          </CollapsibleContent>
        </Collapsible>

        {/* Replies collapsable */}
        {!isReply && (
          <Collapsible open={showReplies}>
            <CollapsibleContent
              className="mt-2 space-y-4 border-l-2 ml-1 border-slate-200 overflow-hidden 
              data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
            >
              {showReplies && (
                <CommentFeed
                  parentId={commentId}
                  type="replies"
                  isNested={true}
                />
              )}
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>
    </div>
  );
}
