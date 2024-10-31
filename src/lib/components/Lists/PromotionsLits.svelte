<script>
  import util from "../../../js/util";
  import Configuration from "../../../config.js";

  export let promotions = [];

  export let onSelect;

  const conf = Configuration.getConfiguration();
</script>

<div>
  <article class="u-cat-top-promotions">
    <div class="u-promotions-list">
      {#each promotions as promotion}
        <button class="providers-block" on:click={() => onSelect(promotion)}>
          <img class="providers-img" src={util.getPromotionImgUrl(conf.ASSETS, { brand: promotion.code })}
            alt=""
          />
        </button>
      {/each}
    </div>
  </article>
</div>

<style>
  @media only screen and (max-width: 1200px) {
    /*.cat-top-providers {
      padding-left: 10px;
      padding-right: 10px;
    }
    .providers-list {
      width: 100%;
      display: grid;
      justify-content: space-around;
      grid-template-columns: repeat(3, 1fr);
      flex-wrap: wrap;
      gap: 15px;
      padding-bottom: 30px;
    }*/
    .providers-block {
      background: #0e0e1c;
      display: flex;
      flex-direction: column;
      width: 95%;
      align-items: center;
      padding: 2.5px;
      margin: 2px;
    }
    .providers-block img {
      width: 99%;
    }
  }

  @media only screen and (min-width: 1200px) {
    /*.providers-list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      width: auto;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 15px;
      padding-top: 20px;
      padding-bottom: 30px;
    }
    .providers-block {
      background-color: #0e0e1c;
      display: flex;
      width: 95%;
      align-items: center;
      padding: 2.5px;
      margin: 2px;
      cursor: pointer;
    }*/
    .providers-block img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      padding: 1rem;
    }
  }
</style>
