import TimeAgo from "@/app/components/time-ago";

export default function CommentHeader({
  authorName,
  createdAt,
}: {
  authorName: string;
  createdAt: string;
}) {
  return (
    <div className="flex gap-2 items-center mb-0.5">
      <span className="font-semibold text-sm leading-none">{authorName}</span>
      <TimeAgo
        timestamp={createdAt}
        className="text-xs text-muted-foreground"
      />
    </div>
  );
}
