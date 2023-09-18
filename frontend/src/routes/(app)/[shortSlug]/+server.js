import { redirect } from "@sveltejs/kit";

// GET endpoint to get a link from its shortslug 
// and update the number of clicks
export const GET = async ({ locals, params }) => {
  let link;
  try {
    link = await locals.pb
      .collection("links")
      .getFirstListItem(`shortSlug="${params.shortSlug}"`);

    await locals.pb.collection("links").update(link.id, {
      clicks: link.clicks + 1,
    });
  } catch (e) {
    console.log(e);
  }
  // redirect browser to url if available
  if (link?.url) throw redirect(303, link?.url);
  throw redirect(303, "/");
}
