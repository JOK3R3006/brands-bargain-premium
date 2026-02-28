import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Brands Bargain's friendly shopping assistant. You help customers with questions about our retail store.

STORE INFO:
- Name: Brands Bargain
- Location: SCO 8, Sector 11, Panchkula, Haryana 134112, India
- Phone: 0172-5057777
- Google Maps Code: MVQ2+JV Panchkula
- Hours: Mon-Sat 10:00 AM - 9:00 PM, Sunday 11:00 AM - 8:00 PM

WHAT WE SELL:
- Premium branded clothing (men's, women's, kids)
- Footwear (Nike, Adidas, Puma, and more) at 40-70% off
- Accessories (bags, belts, wallets, sunglasses)
- Seasonal collections and limited-time deals

KEY SELLING POINTS:
- Top brands at unbeatable prices (up to 70% off MRP)
- 100% authentic branded products
- Huge variety under one roof
- Best deals in Panchkula / Tricity area
- Friendly and helpful staff
- Easy exchange policy

Keep responses short (2-3 sentences max), friendly, and encouraging customers to visit the store or call for details. If asked about specific pricing, say prices vary by brand and season, and suggest visiting or calling for current deals.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests. Please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
