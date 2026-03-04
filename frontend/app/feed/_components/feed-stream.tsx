"use client";

import { apiClient } from "@/app/lib/api-client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import useSWRInfinite from "swr/infinite";
import { adaptIssueFeedDTO } from "../adapter";
import { IssuePageResponse, MappedIssuePageResponse } from "../type";
import IssueCard from "@/app/components/issue-card";

const issueFetcher = async (url: string): Promise<MappedIssuePageResponse> => {
  const response = await apiClient.get<IssuePageResponse>(url);
  return {
    page: response.page,
    content: response.content.map(adaptIssueFeedDTO),
  };
};

export default function FeedStream({
  initialFeed,
}: {
  initialFeed: MappedIssuePageResponse;
}) {
  const getKey = (
    pageIndex: number,
    previousPageData: MappedIssuePageResponse | null,
  ) => {
    if (previousPageData && !previousPageData.content.length) return null;
    return `api/v1/issues?page=${pageIndex}`;
  };

  const { data, size, setSize, isLoading, isValidating } = useSWRInfinite(
    getKey,
    issueFetcher,
    { fallbackData: [initialFeed], revalidateFirstPage: false },
    // TODO: robust logic for initial data fetching or skipping on client
  );

  const allIssues = data ? data.flatMap((dataPage) => dataPage.content) : [];

  const isEmpty = data?.[0]?.content.length === 0;
  const isAtLastPage =
    data && data[data.length - 1]?.page.number + 1 >= data[0]?.page.totalPages;
  const isReachingEnd = isEmpty || isAtLastPage;

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");

  if (isEmpty) return <p>No issues found in your area!</p>;

  return (
    <section>
      <div className="py-2 space-y-4">
        <div className="space-y-2">
          {allIssues.map((issue) => (
            <IssueCard key={issue.id} {...issue} />
          ))}
        </div>

        <div className="flex justify-center py-6">
          {!isReachingEnd && (
            <Button
              variant={"outline"}
              className="w-full max-x-xs"
              onClick={() => setSize(size + 1)}
              disabled={isLoadingMore || isValidating}
            >
              {isLoadingMore || isValidating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Fetching Issues...
                </>
              ) : (
                "Show More Issues"
              )}
            </Button>
          )}

          {isReachingEnd && (
            <p className="text-sm text-muted-foreground">
              You've reached the end of the feed.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
