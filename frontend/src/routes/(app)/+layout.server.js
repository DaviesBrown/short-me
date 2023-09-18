export const load = async ({ locals }) => {
  // loads user data in all pages
  return {
    user: locals.user || undefined,
  }
}
