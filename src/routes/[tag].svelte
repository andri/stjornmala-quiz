<script context="module">
  export const prerender = true;
  export async function load({ page }) {
    const pageTags = [
      "kommunisti",
      "rottaekur-sosialisti",
      "sosialisti",
      "vinstri-krati",
      "midju-krati",
      "haegri-krati",
      "kapitalisti",
      "sotsvartur-kapitalisti",
    ];

    if (pageTags.indexOf(page.params.tag) === -1) {
      return null;
    } else {
      return {};
    }
  }
</script>

<script>
  import { page } from "$app/stores";
  let { params } = $page;
</script>

<svelte:head>
  <title>Ertu kommi, sósíalisti, krati eða kapítalisti?</title>
  <meta
    property="og:title"
    content="Ertu kommi, sósíalisti, krati eða kapítalisti?"
  />
  <meta property="og:url" content={`http://x2021.is/${params.tag}`} />
  <meta
    property="og:image"
    content={`http://x2021.is/share/${params.tag}.png`}
  />
</svelte:head>
