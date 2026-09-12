// ---------------------------------------------------------------------------
// Payment integration point.
//
// No payment provider is connected yet. This function is the single place
// a real integration (M-Pesa STK push, card payments, bank transfer, or an
// international provider) should be wired in. Until then it surfaces a
// clear, honest message rather than pretending a transaction happened.
// ---------------------------------------------------------------------------

export interface SupportCampaignOptions {
  campaignId: string;
  amount?: number;
  method?: "mpesa" | "card" | "bank" | "international";
}

export interface SupportCampaignResult {
  ok: boolean;
  message: string;
}

export async function handleSupportCampaign(
  options: SupportCampaignOptions
): Promise<SupportCampaignResult> {
  // TODO: replace with a real call once a payment provider is configured, e.g.:
  //
  // const res = await fetch("/api/campaigns/" + options.campaignId + "/support", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(options),
  // });
  // return res.json();

  console.info("handleSupportCampaign called (no provider configured):", options);

  return {
    ok: false,
    message:
      "Online payments aren't connected yet. In the meantime, reach out through the Contact page and the team will help you support this campaign directly.",
  };
}

/** Which payment methods are currently configured and safe to display. */
export const enabledPaymentMethods: SupportCampaignOptions["method"][] = [];
