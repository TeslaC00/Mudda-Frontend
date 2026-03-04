"use client";

import { adaptCommentDTO, adaptReplyDTO } from "@/app/feed/adapter";
import {
  CommentPageResponse,
  MappedCommentPageResponse,
  ReplyPageResponse,
} from "@/app/feed/type";
import { apiClient } from "@/app/lib/api-client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import useSWRInfinite from "swr/infinite";
import CommentItem from "./comment-item";
import { cn } from "@/lib/utils";

const commentFetcher = async ([type, parentId, params]: [
  string,
  number,
  string,
]): Promise<MappedCommentPageResponse> => {
  if (type === "comments") {
    const fullUrl = `api/v1/issues/${parentId}/comments?${params}`;
    const response = await apiClient.get<CommentPageResponse>(fullUrl);

    return {
      page: response.page,
      content: response.content.map(adaptCommentDTO),
    };
  } else {
    const fullUrl = `api/v1/comments/${parentId}/replies?${params}`;
    const response = await apiClient.get<ReplyPageResponse>(fullUrl);
    return {
      page: response.page,
      content: response.content.map(adaptReplyDTO),
    };
  }
};

export default function CommentFeed({
  parentId,
  type = "comments",
  pageSize = 3,
  isNested = false,
  initialComments = undefined,
}: {
  parentId: number;
  type?: "replies" | "comments";
  pageSize?: number;
  isNested?: boolean;
  initialComments?: MappedCommentPageResponse;
}) {
  // TODO: show top comment on feed

  const getKey = (
    pageIndex: number,
    previousPageData: MappedCommentPageResponse | null,
  ) => {
    if (
      previousPageData &&
      previousPageData.page.number + 1 >= previousPageData.page.totalPages
    )
      return null;
    return [type, parentId, `page=${pageIndex}&size=${pageSize}`];
  };

  const { data, size, setSize, isLoading, isValidating } = useSWRInfinite(
    getKey,
    commentFetcher, // TODO: unify comment and reply response
    { fallbackData: [initialComments], revalidateFirstPage: false },
    // TODO: add revalidation time for all fetches
  );

  if (isLoading && !data)
    // TODO: adapt using initial data makes isLoading true for start
    return (
      <div className="flex gap-2 text-xs text-muted-foreground pl-4">
        <span>Loading </span>
        <Loader2 className="h-4 w-4 animate-spin" />
      </div>
    );

  const comments = data ? data.flatMap((page) => page?.content ?? []) : [];
  const lastPage = data ? data[data.length - 1] : null;
  const hasMore =
    lastPage && lastPage.page.number + 1 < lastPage.page.totalPages;

  return (
    <div
      className={cn(
        "mt-1 px-2 border-slate-200",
        isNested ? "space-y-4 pl-3 ml-1" : "space-y-6",
      )}
    >
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          commentId={comment.id}
          authorName={comment.authorName}
          createdAt={comment.createdAt}
          replyCount={comment.replyCount}
          isReply={isNested}
          content={comment.content}
        />
      ))}

      {isValidating && (
        <div className="flex justify-center py-2">
          <Loader2 size={14} className="animate-spin text-muted-foreground" />
        </div>
      )}

      {hasMore && !isValidating && (
        <Button
          variant="link"
          size="sm"
          onClick={() => setSize(size + 1)}
          className="text-xs text-muted-foreground"
        >
          Show more {isNested ? "replies" : "comments"}
        </Button>
      )}
    </div>
  );
}
