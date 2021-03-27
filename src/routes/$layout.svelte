<script context="module">
  export const prerender = true;
</script>

<script>
  import "../global.css";
  import questions from "../lib/questions";
  import results from "../lib/results";

  let _questions = questions.map(({ answers, ...question }) => {
    return {
      answers: answers
        .map((a, i) => {
          return [a, i];
        })
        .sort(() => 0.5 - Math.random()),
      ...question,
    };
  });

  let score = false;
  let answeredCount = 0;
  let result = null;
  let showResult = false;

  $: answeredCount = _questions.filter((q) => {
    return q.answer !== null;
  }).length;

  $: if (
    _questions.every((q) => {
      return q.answer !== null;
    })
  ) {
    score =
      _questions
        .map((q) => {
          return q.answer;
        })
        .reduce((a, b) => {
          return a + b;
        }, 0) /
      (_questions.length * 3);
    score = (1 - score) * 100;

    if (score >= 88) {
      result = results["kommunisti"];
    } else if (score >= 71.5) {
      result = results["rottaekur-sosialisti"];
    } else if (score >= 55.0) {
      result = results["sosialisti"];
    } else if (score >= 43.75) {
      result = results["vinstri-krati"];
    } else if (score >= 32.5) {
      result = results["midju-krati"];
    } else if (score >= 21.25) {
      result = results["haegri-krati"];
    } else if (score >= 10.63) {
      result = results["kapitalisti"];
    } else if (score >= 0) {
      result = results["sotsvartur-kapitalisti"];
    }
  }

  const setAnswer = (qIndex, aIndex) => {
    _questions[qIndex].answer = aIndex;
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
          alt="Stjórnmálamaður"
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
      {#each _questions as question, i}
        <div class="mb-12">
          <div class="mb-6 text-2xl sm:text-3xl font-black italic">
            {question.question}
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-1 bg-citrane shadow-lg"
          >
            {#each question.answers as [answer, j]}
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
            {answeredCount} / {_questions.length}
          {:else}
            {_questions.length} spurningar
          {/if}
        </div>
      </div>
      <div class="text-xs text-center mt-4 text-opacity-30 text-black">
        Engum upplýsingum er safnað á þessari vefsíðu nema
        <a class="underline" href="https://usefathom.com/compliance"
          >ópersónugreinanlegum</a
        >
        heimsóknartölum. Síðan notar <strong>ekki</strong> vafrakökur. <br />
        x2021.is eru nokkrir félagar með áhuga á stjórnmálum.
        <a class="underline" href="https://github.com/jokull/stjornmala-quiz"
          >GitHub</a
        >
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
