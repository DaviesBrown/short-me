import { nanoid } from "nanoid/async";
import { fail, redirect } from "@sveltejs/kit";
import { getShortLink } from "$lib/utils";

export const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(303, "/landing");
  }

  const top10Links = await locals.pb.collection("links").getFullList(10, {
    sort: "-clicks",
    filter: `createdBy="${locals.user?.id}"`,
  });
  return {
    top10Links: structuredClone(top10Links)
  }
}

export const actions = {
  createShortLink: async ({ locals, request, url: ui}) => {
    const data = await request.formData();
    try {
      let link;
      let shortSlug;
      const url = data.get("url");
      const title = data.get("title");
      if (title && title.length < 6) {
        return fail(400, { error: "Title length is less than 6" });
      }
      shortSlug = title ? title : await nanoid(8);

      try {
        link = await locals.pb.collection("links")
                              .getFirstListItem(`url="${url}"`);
        await locals.pb.collection("links").update(link.id, {
          shortSlug: shortSlug,
        });
      } catch (_) {
        await locals.pb.collection("links").create({
          url,
          shortSlug,
          createdBy: locals.user?.id,
        });
      }
      return {
        shortLink: getShortLink(ui.origin, shortSlug),
        url,
        title: title || ""
      }
    } catch (e) {
      console.log(e);
      return fail(e.status, { error: e.message });
    }
  },
}
