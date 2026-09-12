// ---------------------------------------------------------------------------
// Form submission integration point.
//
// No backend is connected yet. `submitForm` is the single place a real API
// (a serverless function, Supabase table insert, or custom backend) should
// be wired in. Every form on the site (volunteer, partner, contact) calls
// this same function with a `formType` discriminator so a single endpoint
// can route on the backend later.
// ---------------------------------------------------------------------------

export type FormType = "volunteer" | "partner" | "contact";

export interface SubmitFormResult {
  ok: boolean;
  message: string;
}

export async function submitForm(
  formType: FormType,
  data: Record<string, string>
): Promise<SubmitFormResult> {
  // TODO: replace with a real call once a backend is configured, e.g.:
  //
  // const res = await fetch("/api/forms/" + formType, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  // if (!res.ok) return { ok: false, message: "Something went wrong. Please try again." };
  // return { ok: true, message: "Thank you. Your submission has been received." };

  console.info(`submitForm(${formType}) called (no backend configured):`, data);

  // Simulate network latency so the UI's loading state is exercised honestly.
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    ok: true,
    message:
      "Thank you. Your information has been captured in this preview. Once a backend is connected, submissions like this will reach the Ficha Uchi team directly.",
  };
}
