let indoorAds = [];
let outdoorAds = [];

export async function POST(request, { params }) {
  const category = params.category;
  const ad = await request.json();

  if (category === "indoor") {
    indoorAds.push(ad);
  } else if (category === "outdoor") {
    outdoorAds.push(ad);
  }

  return new Response(JSON.stringify({ success: true }), { status: 201 });
}

export async function GET(request, { params }) {
  const category = params.category;

  if (category === "indoor") {
    return new Response(JSON.stringify(indoorAds), { status: 200 });
  } else if (category === "outdoor") {
    return new Response(JSON.stringify(outdoorAds), { status: 200 });
  }

  return new Response(JSON.stringify([]), { status: 404 });
}
