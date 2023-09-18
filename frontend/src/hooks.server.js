import pb from "$lib/pocketbase";

export const handle = async ({ event, resolve }) => {
  pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

  //initialize database to an object if valid
  if (pb.authStore.isValid) {
    try {
      await pb.collection("users").authRefresh();
    } catch (e) {
      await pb.authStore.clear();
    }
  }

  // set pb and user as local variables
  event.locals.pb = pb;
  event.locals.user = structuredClone(pb.authStore.model);

  const response = await resolve(event);
  response.headers.set(
    "set-cookie",
    pb.authStore.exportToCookie({ httpOnly: false })
  );

  return response;
}
