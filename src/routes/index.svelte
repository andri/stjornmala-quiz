<script context="module">
  export const prerender = true;
</script>

<script>
  let questions = [
    {
      question: "Hvað finnst þér um einkarekin fyrirtæki?",
      answers: [
        "Þau eru hið illa",
        "Stórfyrirtæki eru slæm, lítil fjölskyldufyrirtæki, smáfyrirtæki og einyrkjar sleppa",
        "Sum fyrirtæki eru góð, önnur ekki",
        "Einkarekin fyrirtæki eru grunnur alls",
      ],
      answer: null,
    },
    {
      question: "Hvað fær þig til að fara í kröfugöngu?",
      answers: [
        "Krefjast þess að kapítalisminn verði brotinn niður",
        "Krefjast hækkun lægstu launa",
        "Krefjast jafnra launa kynjanna",
        "Krefjast þess að áfengi sé selt í matvörubúðum",
      ],
      answer: null,
    },
    {
      question: "Ætti starfsfólk að eiga fulltrúa í stjórnum fyrirtækja?",
      answers: [
        "Fyrirtæki ættu að vera undir fullri stjórn starfsfólksins",
        "Já, starfsfólk ætti í það minnsta að eiga tvo af fimm stjórnarmönnum",
        "Tja, þetta er falleg hugmynd en myndi kannski ekki virka í öllum fyrirtækjum",
        "Nei, aðeins hluthafa eiga að hafa fulltrúa í stjórn",
      ],
      answer: null,
    },
    {
      question: "Hvað finnst þér um verkalýðsfélög?",
      answers: [
        "Þau verða óþörf þegar alþýðan hefur náð völdum",
        "Þau eru mikilvægustu baráttutæki alþýðunnar",
        "Þau eru mikilvæg í kjaraviðræðum en ættu að láta kjörna fulltrúa um að marka stefnu fyrir ríkisvaldið",
        "Tímaskekkja, hver starfsmaður á að semja sjálfur um kaup og kjör",
      ],
      answer: null,
    },
    {
      question: "Hvernig sérðu heilbrigðiskerfið fyrir þér?",
      answers: [
        "Heilbrigðisþjónusta undir stjórn alþýðunnar",
        "Gjaldfrjáls opinber heilbrigðisþjónusta",
        "Hófleg gjaldtaka í blönduðu kerfi þar sem kostir opinbers rekstur og einkareksturs vinna saman",
        "Einkarekin heilbrigðisfyrirtæki og tryggingafélög",
      ],
      answer: null,
    },
  ];

  let score = false;
  let answeredCount = 0;

  $: answeredCount = questions.filter((q) => {
    return q.answer !== null;
  }).length;

  $: if (
    questions.every((q) => {
      return q.answer !== null;
    })
  ) {
    score =
      questions
        .map((q) => {
          return q.answer;
        })
        .reduce((a, b) => {
          return a + b;
        }, 0) /
      (questions.length * 3);
    score = (1 - score) * 100;
  }

  const setAnswer = (qIndex, aIndex) => {
    questions[qIndex].answer = aIndex;
  };
</script>

<main class="max max-w-3xl mx-auto px-2 sm:px-6 my-4 sm:my-8">
  <h1 class="flex items-start mb-4 sm:mb-8 start justify-center">
    <svg
      class="w-10 sm:w-14 inline flex-none text-socialist"
      viewBox="0 0 516 516"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Artboard"
        transform="translate(-142.000000, -142.000000)"
        fill="currentColor"
      >
        <path
          d="M400,142 C542.489465,142 658,257.510535 658,400 C658,542.489465 542.489465,658 400,658 C257.510535,658 142,542.489465 142,400 C142,257.510535 257.510535,142 400,142 Z M582.205702,351 L217,351 L330.213768,432.877143 L286.748083,565.662526 L399.602851,483.291263 L512.45762,565.662526 L468.991935,432.877143 L582.205702,351 Z M400,235 C375.699471,235 356,254.699471 356,279 C356,303.300529 375.699471,323 400,323 C424.300529,323 444,303.300529 444,279 C444,254.699471 424.300529,235 400,235 Z"
          id="Combined-Shape"
        />
      </g>
    </svg>
    <span class="text-4xl sm:text-5xl sm:leading-tight font-bold ml-2 sm:ml-4">
      Ertu kommi, sósíalisti, krati eða kapítalisti?
    </span>
  </h1>

  <hr class="h-0.5 mb-6 sm:mb-8" />

  {#each questions as question, i}
    <div class="mb-6 sm:mb-10">
      <div class="mb-2 sm:mb-4 text-lg sm:text-xl">{question.question}</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {#each question.answers as answer, j}
          <button
            class={`text-left p-2 sm:p-4 flex rounded ${
              question.answer === j
                ? "bg-socialist text-white shadow-sm"
                : "bg-merino"
            }`}
            on:click={() => {
              setAnswer(i, j);
            }}
          >
            <div class="">{answer}</div>
          </button>
        {/each}
      </div>
    </div>
  {/each}

  <hr class="h-0.5 my-6" />

  <div
    class="sticky bottom-8 my-8 px-6 py-2 rounded-full bg-socialist shadow mx-auto text-white max-w-sm text-center"
  >
    {#if score !== false}
      <div>
        Þú ert
        {#if score >= 87.5}
          Kommúnisti (Alþýðufylkingin/Sósíalistaflokkurinn)
        {:else if score >= 75}
          Róttækur sósíalisti (Sósíalistaflokkurinn)
        {:else if score >= 62.5}
          Vinstri krati (VG, Samfylkingin)
        {:else if score >= 50}
          Miðju-krati (Framsókn, Píratar, Flokkur fólksins)
        {:else if score >= 37.5}
          Miðju-krati (Framsókn, Píratar, Flokkur fólksins)
        {:else if score >= 25}
          Hægri krati (Viðreisn)
        {:else if score >= 12.5}
          Kapítalisti (Sjálfstæðisflokkur, Miðflokkur)
        {:else if score >= 0}
          Sótsvartur kapítalisti (Frjálshyggjufélag)
        {/if}
      </div>
    {:else if answeredCount > 0}
      {answeredCount} / {questions.length}
    {:else}
      {questions.length} spurningar
    {/if}
  </div>

  <div class="text-center">
    <!--
87,5%-100,0% = Kommúnisti (Alþýðufylkingin/Sósíalistaflokkurinn)
75,0%-87,5%= Róttækur sósíalisti (Sósíalistaflokkurinn)
62,5%-75,0%= Sósíalisti (Sósíalistaflokkurinn)
50,0%-62,5%= Vinstri krati (Vg, Samfylkingin)
37,5%-50,0%= Miðju-krati (Framsókn, Píratar, Flokkur fólksins)
25,0%-37,5%= Hægri krati (Viðreisn)
12,5%-25,0%= Kapítalisti (Sjálfstæðisflokkur, Miðflokkur)
0%-12,5%= Sótsvartur kapítalisti (Frjálshyggjufélag)
		-->
    <svg
      class=" w-10 sm:w-14 inline flex-none text-socialist"
      viewBox="0 0 516 516"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Artboard"
        transform="translate(-142.000000, -142.000000)"
        fill="currentColor"
      >
        <path
          d="M400,142 C542.489465,142 658,257.510535 658,400 C658,542.489465 542.489465,658 400,658 C257.510535,658 142,542.489465 142,400 C142,257.510535 257.510535,142 400,142 Z M582.205702,351 L217,351 L330.213768,432.877143 L286.748083,565.662526 L399.602851,483.291263 L512.45762,565.662526 L468.991935,432.877143 L582.205702,351 Z M400,235 C375.699471,235 356,254.699471 356,279 C356,303.300529 375.699471,323 400,323 C424.300529,323 444,303.300529 444,279 C444,254.699471 424.300529,235 400,235 Z"
          id="Combined-Shape"
        />
      </g>
    </svg>
  </div>
</main>
