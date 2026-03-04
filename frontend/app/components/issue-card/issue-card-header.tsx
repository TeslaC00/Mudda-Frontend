import { CardHeader, CardTitle } from "@/components/ui/card";
import TimeAgo from "@/app/components/time-ago";
import { AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AvatarWrapper from "../avatar-wrapper";
import { IssueCardProps } from "@/app/feed/type";

export default function IssueCardHeader({
  authorId,
  authorName,
  authorImageUrl,
  createdAt,
  category,
  severity,
  status,
}: IssueCardProps) {
  // TODO: use severity-badge component for different color severity
  // TODO: use cardAction for card badges
  return (
    <CardHeader className="flex justify-between relative z-10">
      <div id="card-user-info" className="flex gap-3" data-author-id={authorId}>
        <AvatarWrapper
          name={authorName}
          size="lg"
          src={authorImageUrl || undefined}
        />
        <div>
          <CardTitle className="text-sm font-bold">{authorName}</CardTitle>
          <div className="flex gap-1 items-center">
            <TimeAgo timestamp={createdAt} className="text-xs text-slate-600" />
            <span>•</span>
            <Badge variant="ghost" className="rounded-sm bg-accent">
              <span>{category}</span>
            </Badge>
          </div>
        </div>
      </div>
      <div id="card-badges" className="flex gap-2">
        <Badge
          variant="secondary"
          className="bg-orange-200/80 rounded-sm font-bold text-xs text-orange-900"
        >
          <AlertTriangle size={14} className="text-orange-600" />
          <span>Severity: {severity}</span>
        </Badge>
        <Badge
          variant="secondary"
          className="bg-yellow-200 font-bold uppercase rounded-sm"
        >
          {status}
        </Badge>
      </div>
    </CardHeader>
  );
}
