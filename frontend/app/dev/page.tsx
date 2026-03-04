"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IssueCardProps, CommentData, IssueDetailData } from "@/app/feed/type";

const mockComments: CommentData[] = [
  {
    id: 73,
    authorName: "User",
    createdAt: "2026-01-27T18:12:14.248197Z",
    content:
      "The traffic department needs to intervene and remove the cattle immediately.",
    likeCount: 12,
    replyCount: 1,
    replies: [
      {
        id: 71,
        authorName: "Tesla",
        createdAt: "2026-01-27T18:12:14.248054Z",
        content:
          "It's impossible to work from home with constant power cuts every hour.",
        likeCount: 12,
        replyCount: 0,
        replies: [],
        hasLiked: false,
        canLike: false,
        canUpdate: false,
        canDelete: false,
      },
    ],
    hasLiked: false,
    canLike: false,
    canUpdate: false,
    canDelete: false,
  },
  {
    id: 70,
    authorName: "Tesla",
    createdAt: "2026-01-27T18:12:14.248054Z",
    content:
      "It's impossible to work from home with constant power cuts every hour.",
    likeCount: 12,
    replyCount: 0,
    replies: [],
    hasLiked: false,
    canLike: false,
    canUpdate: false,
    canDelete: false,
  },
  {
    id: 7,
    authorName: "Tesla",
    createdAt: "2026-01-27T18:12:14.248054Z",
    content:
      "It's impossible to work from home with constant power cuts every hour.",
    likeCount: 12,
    replyCount: 0,
    replies: [],
    hasLiked: false,
    canLike: false,
    canUpdate: false,
    canDelete: false,
  },
];

const mockIssue: IssueCardProps = {
  title: "Official Site Inspection",
  desc: "An engineer from the PWD visited the site this morning. They have marked the area with yellow tape. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil dolores dolore officia, ratione distinctio eius voluptas, velit voluptates doloremque, eum delectus. Neque sapiente eveniet impedit animi repellat voluptas illum ab?",
  category: "INFRASTRUCTURE",

  // Metadata
  id: 1,
  authorId: 1,
  authorName: "PWD Engineer",
  authorImageUrl: null,
  createdAt: "2026-01-27T18:12:14.248197Z",
  status: "OPEN",
  isResolved: false,
  severity: 5,

  // Metrics
  votes: 12,
  comments: 1,

  // Context
  // images: string[];
  address: "Your Home",
  hasVoted: false,
  canVote: false,
  following: false,

  images: [
    "https://plus.unsplash.com/premium_photo-1675280973827-a81419cfdc73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1496055401924-5e7fdc885742?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675280973827-a81419cfdc73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675280973827-a81419cfdc73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675280973827-a81419cfdc73?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
};

const mockIssueDetail: IssueDetailData = {
  ...mockIssue,
  canComment: false,
  canEdit: false,
  canDelete: false,
  updatedAt: "2026-01-27T18:12:14.248197Z",
};

const mockIssueUpdates = [
  {
    id: 1,
    title: "Official Site Inspection",
    desc: "An engineer from the PWD visited the site this morning. They have marked the area with yellow tape.",
    date: "2026-01-27T18:12:14.248197Z",
    type: "official",
    author: "PWD Engineer",
    likes: 45,
    isMajor: true,
    images: [
      "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1000",
    ],
    comments: [
      {
        id: 1,
        authorName: "Resident A",
        content: "I saw them, they left at 2 PM.",
        createdAt: "1h",
        likes: 2,
        replies: [
          {
            id: 2,
            authorName: "Arjun Singh",
            content: "Thanks! Please share it.",
            createdAt: "4h ago",
            likes: 1,
          },
        ],
      },
      {
        id: 3,
        authorName: "Official Rep",
        content: "We will return tomorrow with more equipment.",
        createdAt: "30m",
        likes: 5,
        replies: [],
      },
      {
        id: 4,
        authorName: "Resident A",
        content: "I saw them, they left at 2 PM.",
        createdAt: "1h",
        likes: 2,
        replies: [
          {
            id: 5,
            authorName: "Arjun Singh",
            content: "Thanks! Please share it.",
            createdAt: "4h ago",
            likes: 1,
          },
        ],
      },
      {
        id: 6,
        authorName: "Official Rep",
        content: "We will return tomorrow with more equipment.",
        createdAt: "30m",
        likes: 5,
        replies: [],
      },
      {
        id: 7,
        authorName: "Resident A",
        content: "I saw them, they left at 2 PM.",
        createdAt: "1h",
        likes: 2,
        replies: [
          {
            id: 8,
            authorName: "Arjun Singh",
            content: "Thanks! Please share it.",
            createdAt: "4h ago",
            likes: 1,
          },
        ],
      },
      {
        id: 9,
        authorName: "Official Rep",
        content: "We will return tomorrow with more equipment.",
        createdAt: "30m",
        likes: 5,
        replies: [],
      },
    ],
  },
  {
    id: 10,
    title: "Reality Check: No Work Yet",
    desc: "It has been 24 hours since the inspection, but no machinery has arrived yet. Traffic is still bad.",
    date: "2026-01-27T18:12:14.248197Z",
    type: "citizen",
    author: "Ravi Kumar",
    likes: 12,
    isMajor: false,
    images: [
      "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1000",
      "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1000",
    ],
  },
];

export default function MigrationPage() {
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="p-4 border-b flex justify-between items-center bg-card">
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            Component Migration Workbench
          </h1>
          <p className="text-sm text-muted-foreground">
            Compare Legacy vs. Shadcn implementation
          </p>
        </div>
        <Badge variant="outline" className="h-6">
          Next.js + Tailwind
        </Badge>
      </header>

      {/* Main Comparison Area */}
      <main className="flex-1 overflow-hidden">
        <ResizablePanelGroup>
          {/* Left Side: Old Component */}
          <ResizablePanel defaultSize={50} minSize={30}>
            <ScrollArea className="h-full w-full p-8 bg-slate-50/50 dark:bg-slate-900/20">
              <div className="max-w-md mx-auto">
                <div className="mb-4 flex items-center gap-2">
                  <Badge variant="destructive">Legacy Component</Badge>
                </div>
                <div className="border border-dashed border-slate-300 p-0 rounded-lg bg-white shadow-sm">
                  {/* <OldComponent /> */}
                </div>
              </div>
            </ScrollArea>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Right Side: New Shadcn Component */}
          <ResizablePanel defaultSize={50} minSize={30}>
            <ScrollArea className="h-full w-full p-8">
              <div className="max-w-md mx-auto">
                <div className="mb-4 flex items-center gap-2">
                  <Badge className="bg-green-600 hover:bg-green-700">
                    Shadcn Version
                  </Badge>
                </div>
                <div className="border p-0 rounded-lg shadow-sm bg-card space-y-2">
                  {/* <NewComponent /> */}
                </div>
              </div>
            </ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>

      {/* Footer / Dev Notes */}
      <footer className="p-2 border-t text-[10px] uppercase tracking-widest text-center text-muted-foreground">
        Drag the center handle to test responsiveness
      </footer>
    </div>
  );
}
