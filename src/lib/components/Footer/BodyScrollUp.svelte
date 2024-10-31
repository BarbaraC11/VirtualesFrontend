<script>
	import { onMount } from "svelte";
	let visible=false

	const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    visible = scrolled > 400 ? true : false;
  };
  onMount(async () => {
    window.addEventListener("scroll", toggleVisible);
  });
</script>

	{#if visible}
	<button
    class="scroll-top"
    href="javascript:void(0)"
    on:click={scrollToTop}
    style=""
  >
    <svg
      fill="black"
      height="40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM385 215c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V177.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 103c9.4-9.4 24.6-9.4 33.9 0L385 215z"
      />
    </svg>
  </button>
  {/if}

  <style>
    .scroll-top {
      text-decoration: none;
      background: #870c1f;
      position: fixed;
      bottom:6rem;
      right: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 50px;
      z-index: 10;
      border:none;
    }
  </style>