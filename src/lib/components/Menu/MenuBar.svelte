<script>
  import MenuButton from "./MenuButton.svelte";

  export let menuBarButtons;
</script>

<section>
  {#each menuBarButtons as buttonConfig}
    <MenuButton {buttonConfig} />
  {/each}
</section>

<style>
  section {
    display: flex;
    justify-content: space-between;
    background: var(--container-background);
    gap: 2px;
    padding: 2px;
  }
</style>
