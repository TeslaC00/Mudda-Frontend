import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  MessageSquareIcon,
  ThumbsUp,
} from "lucide-react";
import CommentMenu from "./comment-menu";

export default function CommentActions({
  replyCount,
  toggleInput,
  showReplies,
  toggleReplies,
}: {
  replyCount: number;
  toggleInput: () => void;
  showReplies: boolean;
  toggleReplies: () => void;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground hover:text-primary-hover hover:bg-primary-soft"
        >
          <ThumbsUp size={14} className="transition-all" />
          <span className="text-sm">12</span>
        </Button>

        <Button
          onClick={toggleInput}
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-primary-hover hover:bg-primary-soft"
        >
          <MessageSquareIcon size={14} className="transition-all" />
          <span className="text-sm">Reply</span>
        </Button>

        {replyCount > 0 && (
          <Button
            onClick={toggleReplies}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary-hover hover:bg-primary-soft gap-1"
          >
            {showReplies ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            <span>{replyCount} Replies</span>
          </Button>
        )}
      </div>
      <CommentMenu />
    </div>
  );
}
