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
  let scoreround = false;
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
      (_questions.length);
    score = (1 - score) * 100;

    if (score >= 81) {
      result = results["ther-mun-ekki-batna"];
    } else if (score >= 61) {
      result = results["hjarta-thitt-erkalt-og-hart"];
    } else if (score >= 41) {
      result = results["thu-ert-a-morkunum"];
    } else if (score >= 21) {
      result = results["thu-getur-losnad"];
    } else if (score >= 1) {
      result = results["laus-undan"];
    } else if (score == 0) {
      result = results["laus-undan-allri"];
    }

    scoreround = Math.round(score);

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
      <div class={`absolute w-full h-1/2 bg-turquoise`}>
        <img
          src={`/politicians.png`}
          alt="Stjórnmálamenn"
          class="mx-auto bottom-0 h-full block z-20"
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
            <span class="relative px-3 z-50">{scoreround}%</span>
          </span>
        </h1>
        <div class="text-center max-w-xl px-8 mx-auto mt-6">
          <div class="text-center max-w-xl px-8 mx-auto mt-6">
            {result["youAre"]}
          </div>
          <div class="mt-12">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=http://nyfrjalshyggja.x2021.is/${result.tag}`}
              class={`px-4 py-4 bg-monza rounded-full italic uppercase font-black`}>
              Deila á Facebook
            </a>
          </div>
          <div class="mt-8 italic">
            <a href="https://nyfrjalshyggja.x2021.is/" class="text-opacity-50">Byrja upp á nýtt</a>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<main class="bg-citrane md:flex flex-row-reverse">
  <div class="mb-4 sm:mb-0 md:w-1/2 bg-black">
    <div class="md:h-screen">
      <div class="bg-turquoise md:fixed md:right-0 md:left-1/2">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl font-black italic text-citrane
          text-center py-8 md:py-16 leading-relaxed sm:leading-comfortable md:leading-comfortable"
        >
          <span class="relative">
            <span class="absolute inset-0 -m-1 bg-black transform -skew-x-6" />
            <span class="relative px-3">Ertu illa farinn af</span>
          </span>
          <br />
          <span class="ml-8 relative">
            <span class="absolute inset-0 -m-1 bg-black transform -skew-x-6" />
            <span class="relative px-3">nýfrjálshyggju?</span>
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
                <div class="lg:text-2x">{answer}</div>
              </button>
            {/each}
          </div>
        </div>
      {/each}

      <div class="sticky bottom-8 my-8 text-white text-center">
        
          {#if score !== false}
            <button class="px-6 py-4 rounded-full font-black bg-monza shadow max-w-min whitespace-nowrap mx-auto italic font-black uppercase"
              on:click={() => {
                showResult = true;
              }}>Birta niðurstöður</button
            >
          {:else if answeredCount > 0}
            <div class="px-6 py-4 rounded-full font-black bg-turquoise shadow max-w-min whitespace-nowrap mx-auto">{answeredCount} / {_questions.length}</div>
          {:else}
          <div class="px-6 py-4 rounded-full font-black bg-black shadow max-w-min whitespace-nowrap mx-auto">{_questions.length} spurningar</div>
          {/if}
      
      </div>
      <div class="text-sm text-center mt-4 text-opacity-30 text-black">
        Engum upplýsingum er safnað á þessari vefsíðu nema
        <a class="underline" href="https://usefathom.com/compliance"
          >ópersónugreinanlegum</a
        >
        heimsóknartölum. Síðan notar <strong>ekki</strong> vafrakökur. Að x2021.is standa nokkrir félagar með áhuga á stjórnmálum.
        <a class="underline" href="https://github.com/andri/stjornmala-quiz"
          >GitHub</a
        >
      </div>
    </div>
  </div>
</main>



<div class="hidden">
  {#each ["ther-mun-ekki-batna", "hjarta-thitt-erkalt-og-hart", "thu-ert-a-morkunum", "thu-getur-losnad", "laus-undan", "laus-undan-allri"] as tag}
    <a href={`/${tag}`}>{tag}</a>
  {/each}
</div>

<slot />
