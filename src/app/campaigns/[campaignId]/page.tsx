import Campaign from "@/components/campaigns/Campaign";
import Load from "@/components/ui/Load";
import { Suspense } from "react";

async function Page({ params }: { params: Promise<{ campaignId: string }> }) {
  const campaignId = (await params).campaignId;

  return (
    <Suspense fallback={<Load />}>
      <Campaign campaignId={campaignId} />
    </Suspense>
  );
}
export default Page;
