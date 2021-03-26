<script context="module">
  export const prerender = true;
</script>

<script>
  import "../global.css";
  const results = {
    kommunisti: {
      tag: "kommunisti",
      image: "lenin.png",
      bg: "bg-monza",
      youAre: "Þú ert kommúnisti",
      youShould:
        "Ef Alþýðufylkingin býður sig ekki fram verðurðu að sætta þig við Sósíalistaflokkinn. Ef svo ólíklega vill til að þú mætir á kjörstað. Hverju breyta kosningar?",
    },
    "rottaekur-sosialisti": {
      tag: "rottaekur-sosialisti",
      image: "rosa.png",
      bg: "bg-monza",
      youAre: "Þú ert róttækur sósíalisti",
      youShould:
        "Þú hefur loksins flokk sem þú getur kosið í þingkosningum, Sósíalistaflokk Íslands, þótt baráttan fari auðvitað fram í verkalýðshreyfingunni og öðrum baráttusamtökum alþýðunnar.",
    },
    sosialisti: {
      tag: "sosialisti",
      image: "aoc.png",
      bg: "bg-monza",
      youAre: "Þú ert sósíalisti",
      youShould:
        "Og það er til flokkur sem er skýrður eftir þér; Sósíalistaflokkur Íslands. Þú ert fyrir hann og hann er fyrir þig.",
    },
    "vinstri-krati": {
      tag: "vinstri-krati",
      image: "palme.png",
      bg: "bg-monza",
      youAre: "Þú ert vinstri krati ",
      youShould:
        "Þú ættir að kjósa VG ef þú getur fyrirgefið þeim stjórnarsamstarfið við Sjálfstæðisflokkinn. Eða Samfylkinguna ef þú getur fyrirgefið þeim nýfrjálshyggjuna. Annars getur þú refsað þessum flokkum og kosið Sósíalistaflokkinn.",
    },
    "midju-krati": {
      tag: "midju-krati",
      image: "warren.png",
      bg: "bg-plum",
      youAre: "Þú ert miðju-krati ",
      youShould:
        "Þú hefur úr ýmsu að velja í næstu kosningum. Kannski er Framsókn eitthvað fyrir þig? Eða Píratar? Hvað með Flokk fólksins?",
    },
    "haegri-krati": {
      tag: "haegri-krati",
      image: "blair.png",
      bg: "bg-matisse",
      youAre: "Þú ert hægri krati",
      youShould: "Og Viðreisn er þinn flokkur,",
    },
    kapitalisti: {
      tag: "kapitalisti",
      image: "thatcher.png",
      bg: "bg-matisse",
      youAre: "Þú ert kapítalisti",
      youShould:
        "Þú getur valið úr þeim flokkum sem vilja alls ekki skerða völd auðvaldsins: Sjálfstæðisflokkur eða Miðflokkur, hvorn viltu?",
    },
    "sotsvartur-kapitalisti": {
      tag: "sotsvartur-kapitalisti",
      image: "rand.png",
      bg: "bg-black",
      youAre: "Þú ert sótsvartur kapítalisti",
      youShould:
        "Þú ert á móti ríkisvaldinu, nema þá sem her og löggu til að verja auðvaldið. Þú átt engan stjórnmálaflokk en verður að sætta þig við Sjálfstæðisflokkinn þar til Frjálshyggjufélagið fer í framboð.",
    },
  };

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
        "Nei, aðeins hluthafar eiga að hafa fulltrúa í stjórn",
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
    {
      question: "Nefndu dæmi um mistök sósíalismans.",
      answers: [
        "Alls staðar þar sem hann leiddi ekki til kommúnisma",
        "Þegar hann gafst upp fyrir nýfrjálshyggjunni um 1980",
        "Þar sem vernd starfsfólks er orðin svo mikil að fyrirtæki óttast að ráða fólk",
        "Venesúela",
      ],
      answer: null,
    },
    {
      question:
        "Nefndu fyrirbrigði sem fólk fattar ekki að er sósíalísk í grunninn.",
      answers: [
        "Kirkjan",
        "Þjóðvegir, holræsi",
        "Heilbrigðiskerfið, almannatryggingar",
        "Tekjuskattur",
      ],
      answer: null,
    },
    {
      question: "Hvað finnst þér vera vanmetnustu hetjur Íslandssögunnar",
      answers: [
        "Þrælarnir sem drápu Hjörleif",
        "Verkafólkið sem stofnaði fyrstu verkalýðsfélögin",
        "Sigríður í Brattholti",
        "Björgólfur Thor Björgólfsson",
      ],
      answer: null,
    },
    {
      question: "Hvað keyrir áfram hagkerfið?",
      answers: [
        "Verkafólk",
        "Verkafólk, hið opinbera og fyrirtæki",
        "Fyrirtæki og ríkisvaldið",
        "Fyrirtæki",
      ],
      answer: null,
    },
    {
      question: "Hvað er góð ástæða fyrir stríði?",
      answers: [
        "Hjálpa alþýðunni við að varpa af sér oki valdastéttanna",
        "Verjast innrás",
        "Aðstoða lönd sem ráðist er á",
        "Ráðast á lönd sem eiga auðlindir sem þig vantar",
      ],
      answer: null,
    },
    {
      question: "Hver ættu lágmarks mánaðarlaun að vera?",
      answers: [
        "Um 750 þús. kr.",
        "Um 450 þús. kr.",
        "Um 350 þús. kr.",
        "Það á ekki að vera neitt lágmark, laun ráðast á markaði",
      ],
      answer: null,
    },
    {
      question: "Hver er mesta pólitíska ógnin í dag?",
      answers: [
        "Kapítalisminn",
        "Nýfrjálshyggjan",
        "Popúlisminn",
        "Sósíalisminn",
      ],
      answer: null,
    },
    {
      question: "Hverjum ættir þú aldrei að treysta?",
      answers: ["Fyrirtækjum", "Fasistum", "Kommúnistum", "Góða fólkinu"],
      answer: null,
    },
    {
      question: "Hver er megin ástæðan fyrir vaxandi ójöfnuði?",
      answers: [
        "Kapítalísk fyrirtæki",
        "Veiking verkalýðsfélaga",
        "Róbótavæðing",
        "Vaxandi leti",
      ],
      answer: null,
    },
    {
      question: "Ef þú mættir setja lög á morgun, hver væru þau?",
      answers: [
        "Leggja niður ríkisvaldið",
        "Banna launagreiðslur sem væru meira en tvöfalt hærri en lágmarkslaun",
        "Setja á kolefnisskatt",
        "Loka Samkeppniseftirlitinu",
      ],
      answer: null,
    },
    {
      question: "Hvernig bíl langar þig í?",
      answers: [
        "Engan, ég hef ekki trú á bílum",
        "Almennilegan strætó",
        "Volvo twin-jeppa",
        "Tesla. Og Land Cruiser ef ég þarf að fara á fjöll",
      ],
      answer: null,
    },
    {
      question: "Ef þú leiddir ríkisstjórn hvert væri helsta markmið hennar?",
      answers: [
        "Segja af sér til að flýta fyrir endalokum kapitalismans",
        "Byggja upp velferðarkerfi og innviði samfélagsins",
        "Ráðast að loftslagsvánni",
        "Undirbúa nýlendu á Mars",
      ],
      answer: null,
    },
    {
      question:
        "Hvað finnst þér eðlilegur hátekjuskattur á mánaðartekjur yfir 10 milljónir?",
      answers: ["100% – enginn á að hafa svo háar tekjur", "90%", "50%", "22%"],
      answer: null,
    },
  ];

  let score = false;
  let answeredCount = 0;
  let result = null;
  let showResult = false;

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

    if (score >= 87.5) {
      result = results["kommunisti"];
    } else if (score >= 75) {
      result = results["rottaekur-sosialisti"];
    } else if (score >= 62.5) {
      result = results["sosialisti"];
    } else if (score >= 50) {
      result = results["vinstri-krati"];
    } else if (score >= 37.5) {
      result = results["midju-krati"];
    } else if (score >= 25) {
      result = results["haegri-krati"];
    } else if (score >= 12.5) {
      result = results["kapitalisti"];
    } else if (score >= 0) {
      result = results["sotsvartur-kapitalisti"];
    }
  }

  const setAnswer = (qIndex, aIndex) => {
    questions[qIndex].answer = aIndex;
  };
</script>

{#if showResult === true}
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="fixed inset-0 bg-black min-h-screen">
      <div class="hidden bg-monza bg-matisse bg-plum" />
      <div class={`absolute w-full h-1/2 ${result.bg}`}>
        <img
          src={`/${result.image}`}
          alt="Lenín"
          class="w-56 absolute bottom-0 block z-20 left-1/2 -m-28 mb-0"
        />
        <div class="bg-smooth h-20 absolute bottom-0 w-full z-30" />
      </div>
      <div class="absolute top-1/2 w-full text-white">
        <h1
          class="text-black font-black italic text-3xl sm:text-4xl text-center -mt-10"
        >
          <span class="relative">
            <span
              class="absolute inset-0 -m-1 bg-citrane transform -skew-x-6 z-40"
            />
            <span class="relative px-3 z-50">{result["youAre"]}</span>
          </span>
        </h1>
        <div class="text-center max-w-md px-8 mx-auto mt-6">
          <div class="text-center max-w-md px-8 mx-auto mt-6">
            {result["youShould"]}
          </div>
          <div class="mt-6">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=http://x2021.is/${result.tag}`}
              class={`px-4 py-2 ${
                result["tag"] === "sotsvartur-kapitalisti"
                  ? "bg-citrane text-black"
                  : result.bg
              }`}
            >
              Deila á Facebook
            </a>
          </div>
          <div class="mt-10 text-xs">
            <a href="https://x2021.is/">Byrja upp á nýtt</a>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<main class="bg-citrane md:flex flex-row-reverse">
  <div class="mb-4 sm:mb-0 md:w-1/2 bg-black">
    <div class="md:h-screen">
      <div class="bg-monza-matisse md:fixed md:right-0 md:left-1/2">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl font-black italic text-citrane
          text-center py-8 md:py-16 leading-relaxed sm:leading-comfortable md:leading-comfortable"
        >
          <span class="relative">
            <span class="absolute inset-0 -m-1 bg-black transform -skew-x-6" />
            <span class="relative px-3">Ertu kommi, sósíalisti,</span>
          </span>
          <br />
          <span class="ml-8 relative">
            <span class="absolute inset-0 -m-1 bg-black transform -skew-x-6" />
            <span class="relative px-3">krati eða kapítalisti?</span>
          </span>
        </h1>
        <div class="relative md:mt-8">
          <img
            src="/politicians.png"
            alt="Stjórnmálamenn"
            class="block max-w-full mx-auto px-4 md:px-8"
          />
          <div
            class="from-transparent bg-smooth h-12 sm:h-16 md:h-20 absolute bottom-0 w-full"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="p-4 sm:p-6 md:p-12 lg:p-16 md:w-1/2">
    <div class="mx-auto md:max-w-lg">
      {#each questions as question, i}
        <div class="mb-12">
          <div class="mb-6 text-2xl sm:text-3xl font-black italic">
            {question.question}
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-1 bg-citrane shadow-lg"
          >
            {#each question.answers as answer, j}
              <button
                class={`text-left p-2 sm:p-4 flex ${
                  question.answer === j ? "bg-black text-white" : "bg-white"
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

      <div class="sticky bottom-8 my-8 text-white text-center">
        <div
          class="px-6 py-2 rounded-full bg-monza shadow max-w-min whitespace-nowrap mx-auto"
        >
          {#if score !== false}
            <button
              on:click={() => {
                showResult = true;
              }}>Birta niðurstöður</button
            >
          {:else if answeredCount > 0}
            {answeredCount} / {questions.length}
          {:else}
            {questions.length} spurningar
          {/if}
        </div>
      </div>
    </div>
  </div>
</main>

<div class="hidden">
  {#each ["kommunisti", "rottaekur-sosialisti", "sosialisti", "vinstri-krati", "midju-krati", "haegri-krati", "kapitalisti", "sotsvartur-kapitalisti"] as tag}
    <a href={`/${tag}`}>{tag}</a>
  {/each}
</div>

<slot />
