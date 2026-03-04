import IssueTimeline from "./issue-timeline";
import { getIssueById, getIssueUpdatesByIdMock } from "../service";
import IssueSidebar from "./issue-sidebar";
import BackButton from "@/app/components/back-button";
import IssueDetailCard from "@/app/components/issue-card/issue-detail-card";

interface IssueDetailProps {
  params: Promise<{ id: string }>;
}

export default async function IssueDetailPage(props: IssueDetailProps) {
  const params = await props.params;
  const id = Number(params.id);

  const [issue, updates] = await Promise.all([
    getIssueById(id),
    getIssueUpdatesByIdMock(id),
  ]);
  // TODO: remove max-w prop and configure dimensions for resize properly
  // TODO: inject initial comments and updates later for now client fetch

  return (
    <div className="flex items-start h-full relative font-sans">
      <main className="flex-1 bg-white min-h-screen border-x border-slate-200 min-w-0 max-w-2xl">
        <div className="sticky top-0 z-20 bg-slate-100/95 backdrop-blur-md border-b border-slate-100 p-4 flex items-center gap-4">
          <BackButton />
          <h2 className="font-bold text-lg text-slate-800">
            Issue #{issue.id}
          </h2>
        </div>

        <div className="p-4 sm:p-6">
          <IssueDetailCard {...issue} />
          <IssueTimeline updates={updates} />
        </div>
      </main>

      <aside className="xl:block w-80 sticky top-0 h-screen p-6 overflow-y-auto">
        <IssueSidebar updates={updates} />
      </aside>
    </div>
  );
}
