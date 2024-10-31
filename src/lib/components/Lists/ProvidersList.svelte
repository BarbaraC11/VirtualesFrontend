<script>
  import util from "../../../js/util";
  import Configuration from "../../../config";

  export let providers = [];
  export let newProviders = [];
  export let onSelect;

  

  const conf = Configuration.getConfiguration();
  const hasNewTag = (item) => {
    console.log(item);
    return newProviders.includes(item.name);
  };
</script>

<div>
  <article class="cat-top-providers">
    <div class="providers-list">
      {#each providers as provider}
        <button
          class="providers-block button"
          on:click={() => onSelect(provider)}
          style="position:relative;"
        >
          <img
            class="providers-img"
            src={util.getProviderImgUrl(conf.ASSETS, { brand: provider.code })}
            alt=""
          />
          {#if hasNewTag(provider)}
            <div class="ribbon-container">
              <div class="ribbon">
                <span class="new-work">Nuevo</span>
              </div>
            </div>
          {/if}
        </button>
      {/each}
    </div>
  </article>
</div>

<style>

.ribbon {
  color: white;
    position: absolute;
    left: -25px;
    top: 15px;
    background: #d02120;
    width: 100px;
    text-align: center;
    transform: rotate(319deg);
    z-index: 0;
    font-weight: bold;
    font-size: 14px;
    text-shadow: 1px 1px 3px black;
}
.new-work {
      color: white;
      font-size:16px;
    }
    .ribbon-container {
    position: absolute;
    top: 0;
    left: 0;
}
.providers-block{
  overflow: hidden;
}
.providers-block img {
  overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 1rem;
    }
  @media only screen and (max-width: 1200px) {
    .cat-top-providers {
      padding-left: 10px;
      padding-right: 10px;
    }
    .providers-list {
      width: 100%;
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(1, 1fr);
    gap: 5px;
    padding-bottom: 30px;
    }
    .providers-block {
      background: #0e0e1c;
      align-items: center;
      padding: 2.5px;
      margin: 2px;
      border: none;
    }



  }
  @media only screen and (max-width: 1200px) and (orientation:landscape){
    .providers-list {

    grid-template-columns: repeat(3, 1fr);

    }
  }
  @media only screen and (min-width: 1200px) {
    .providers-list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      width: auto;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 15px;
      padding-top: 20px;
      padding-bottom: 30px;
    }
    .providers-block {
      overflow: hidden;
      background-color: #0e0e1c;
      display: flex;
      width: 95%;
      align-items: center;
      padding: 2.5px;
      margin: 2px;
      cursor: pointer;
      border: none;
    }


  }
</style>
