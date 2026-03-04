"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const goBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/feed");
  };

  return (
    <Button
      variant="ghost"
      onClick={goBack}
      size="icon-lg"
      className="hover:bg-slate-200 rounded-full"
    >
      <ArrowLeft strokeWidth={3} />
    </Button>
  );
}
