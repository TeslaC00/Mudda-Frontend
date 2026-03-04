"use client";

import { IssueCardProps } from "@/app/feed/type";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  Tooltip,
} from "@/components/ui/tooltip";
import {
  TrendingUp,
  MessageSquare,
  MapPinIcon,
  MoreHorizontal,
  PencilIcon,
  TrashIcon,
  BookmarkIcon,
  FlagIcon,
} from "lucide-react";
import { useState } from "react";

export default function IssueCardFooter({
  votes,
  comments,
  address,
  following,
  hasVoted,
  canVote,
  // TODO: add canComment and canLikeComment canReplyComment to nested comments
  // TODO: show popover when click like or edit
}: IssueCardProps) {
  const [isFollowing, setIsFollowing] = useState(following);
  return (
    <CardFooter className="-ml-2 gap-2 relative z-10 justify-between">
      <div id="footer-btn" className="flex items-center gap-1">
        <Button
          variant="ghost"
          className="hover:text-blue-500 hover:bg-blue-50 rounded-lg"
        >
          <TrendingUp className="shrink-0" />
          <span>{votes} Support</span>
        </Button>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="hover:text-blue-500 hover:bg-blue-50 rounded-lg"
          >
            <MessageSquare className="shrink-0" />
            <span>{comments} Comments</span>
          </Button>
        </CollapsibleTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className="hover:text-blue-500 hover:bg-blue-50 rounded-lg flex items-center 
                justify-start gap-2 w-fit overflow-hidden max-w-60"
              >
                <MapPinIcon className="shrink-0" />
                <span className="truncate min-w-0">{address}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent
              className="max-w-lg text-wrap bg-slate-50 text-slate-900 border 
            border-slate-200 shadow-sm"
            >
              {address}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreHorizontal className="shrink-0" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer">
            <PencilIcon />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer">
            <TrashIcon className="text-red-600" />
            <span>Delete</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className=" text-blue-600 focus:text-blue-600 focus:bg-blue-50 cursor-pointer"
            onSelect={(e) => {
              e.preventDefault();
              setIsFollowing(!isFollowing);
            }}
          >
            <BookmarkIcon
              className={` text-blue-600 ${isFollowing ? "fill-blue-600" : ""} `}
            />
            <span>Follow</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <FlagIcon />
            <span>Report</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </CardFooter>
  );
}
