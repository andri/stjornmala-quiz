<script context="module">
  export const prerender = true;
  export async function load({ page }) {
    const pageTags = [
      "ther-mun-ekki-batna",
      "hjarta-thitt-erkalt-og-hart",
      "thu-ert-a-morkunum",
      "thu-getur-losnad",
      "laus-undan",
      "laus-undan-allri",
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
  <title>Ertu illa farinn af nýfrjálshyggju?</title>
  <meta
    property="og:title"
    content="Ertu illa farinn af nýfrjálshyggju?"
  />
  <meta property="og:url" content={`https://nyfrjalshyggja.x2021.is/${params.tag}`} />
  <meta
    property="og:image"
    content={`https://nyfrjalshyggja.x2021.is/share/${params.tag}.png?v=2`}
  />
</svelte:head>
