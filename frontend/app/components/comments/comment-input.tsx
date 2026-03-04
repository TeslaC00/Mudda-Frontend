"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Loader2, SendHorizontal } from "lucide-react";
import { useState } from "react";
import UserAvatarWrapper from "../user-avatar-wrapper";

export function CommentInput({ placeholder = "Write a comment..." }) {
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePost = () => {
    if (!text.trim()) return;
    setIsSubmitting(true);
    // TODO: add Logic for posting comments
    setTimeout(() => {
      setIsSubmitting(false);
      setText("");
    }, 1500);
  };

  return (
    <div className="group flex items-start gap-3 p-2 transition-colors">
      <UserAvatarWrapper />

      <div className="flex-1 flex items-end gap-2 border-b focus-within:border-primary">
        <Textarea
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={1}
          autoFocus
          className={cn(
            "min-h-9 max-h-37.5 resize-none",
            "border-none bg-transparent shadow-none focus-visible:ring-0 px-0 py-1.5",
            "text-sm leading-relaxed",
          )}
        />

        <Button
          size="icon"
          variant="ghost"
          disabled={!text.trim() || isSubmitting}
          onClick={handlePost}
          className={cn(
            "h-8 w-8 shrink-0 transition-all",
            text.trim() ? "text-primary" : "text-muted-foreground",
          )}
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <SendHorizontal className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
