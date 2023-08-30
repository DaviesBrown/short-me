import { nanoid } from "nanoid/async"
import { page } from "$app/stores"
import { Actions, redirect } from "@sveltejs/kit"
import { getShortLink } from "$lib/utils"

export const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(303, "/auth/login")
  }

  const top10Links = await locals.pb.collection("links").getFullList(10, {
    sort: "-clicks",
    filter: `createdBy="${locals.user?.id}"`,
  })

  return {
    top10Links: structuredClone(top10Links),
  }
}

export const actions = {
  createShortLink: async ({ locals, request, url: ui}) => {
    const data = await request.formData()
    try {
      const url = data.get("url")
      const title = data.get("title")
      let shortSlug;
      if (title) {
        shortSlug = title
      } else {
        shortSlug = await nanoid(8)
      }

      let link;
      try {
        link = await locals.pb
          .collection("links")
          .getFirstListItem(`url="${url}"`)

        await locals.pb.collection("links").update(link.id, {
          shortSlug: shortSlug,
        })
      } catch (e) {
        console.log(e)
        await locals.pb.collection("links").create({
          url,
          shortSlug,
          createdBy: locals.user?.id,
        })
      }

      return {
        shortLink: getShortLink(ui.origin, shortSlug),
        url,
      }
    } catch (e) {
      console.log(e)
      return fail(e.status, { error: e.message })
    }
  },
}
