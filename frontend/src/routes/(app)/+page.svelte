<script>
  import { fade } from "svelte/transition";
  import { getShortLink } from "$lib/utils";
  import { page } from "$app/stores";
  export let data, form;
  let copied;

  $: {
    if (copied) {
      setTimeout(() => (copied = false), 2000);
    }
  }

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    copied = true;
  }
</script>

<article>
  <h1>Shorten Your Link</h1>
  <form action="?/createShortLink" method="post">
    <label for="url">
      Link
      <input
        type="url"
        name="url"
        id="url"
        value={form?.url || ""}
        placeholder="http://.."
        spellcheck="false"
        required
      />
    </label>
    <label for="title">
      Title
      <input
        type="text"
        name="title"
        id="title"
        value={form?.title || ""}
        placeholder="apples"
        spellcheck="false"
      />
    </label>
    {#if form?.error}
      <p style="color: red;">{form.error}</p>
    {/if}

    {#if form?.shortLink}
      <button
        class="contrast"
        type="button"
        on:click={() => copy(form.shortLink)}
      >
        {#if copied}
          <span in:fade>📋 Copied to Clipboard!</span>
        {:else}
          <span in:fade>{form.shortLink}</span>
        {/if}
      </button>
    {/if}

    <button type="submit">✂️ Shorten</button>
  </form>
</article>

<article>
  <h1>Your Top 10 Links</h1>
  <div style="overflow-x:auto;">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Link</th>
        <th>Short Link</th>
        <th>Clicks</th>
      </tr>
    </thead>
    <tbody>
      {#each data.top10Links as link, i}
        <tr>
          <td>{i + 1}</td>
          <td>{link.url}</td>
          <td>
            <a 
            href={getShortLink($page.url.origin, link.shortSlug)} 
            target="_blank" 
            rel="noreferrer"
            >
            {link.shortSlug}
            </a>
          </td>
          <td>{link.clicks}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  </div>
</article>
