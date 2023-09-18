import { fail, redirect } from "@sveltejs/kit";
import { nanoid } from "nanoid/async";

import pb from "$lib/pocketbase.js";
import { getShortLink } from "$lib/utils";
import { DEFAULT_USERNAME, DEFAULT_PASSWORD } from "$env/static/public"

export const load = async ({ locals }) => {
  // redirect user to login if not
  if (!locals.user) {
    throw redirect(303, "/auth/login")
  }

  // return top 10 links for user
  const top10Links = await locals.pb
                    .collection("links")
                    .getFullList(10, { 
                      sort: "-clicks", 
                      filter: `createdBy="${locals.user?.id}"`,
                    });
  return {
    top10Links: structuredClone(top10Links)
  }
}

export const actions = {
  // form action for creating short link
  createShortLink: async ({ locals, request, url: uri}) => {
    // gets url and title
    const data = await request.formData();
    try {
      let link;
      let shortSlug;
      const url = data.get("url");
      const title = data.get("title");

      // checks if title is less than 6
      if (title && title.length < 6) {
        return fail(400, { error: "Title length is less than 6" });
      }
      // creates a random short slug if title does not exist 
      shortSlug = title ? title : await nanoid(8);

      try {
        // gets link and updates it's shortslug if available
        link = await locals.pb
                      .collection("links")
                      .getFirstListItem(`url="${url}"`);

        await locals.pb.collection("links").update(link.id, {
          shortSlug: shortSlug,
        });
      } catch (_) {
        // create a new link entry with the url provided
        await locals.pb.collection("links").create({
          url,
          shortSlug,
          createdBy: locals.user?.id,
        });
      }

      return {
        shortLink: getShortLink(uri.origin, shortSlug),
        url,
        title: title || ""
      }
    } catch (e) {
      console.log(e);
      return fail(e.status, { error: e.message });
    }
  },
}
