<script>
  import Search from "../Search.svelte";
  import backend from "../../../server";
  import ButtonFav from "../Buttons/ButtonFav.svelte";
  import DropDownButton from "../DropDowns/DropDownButton.svelte";
  import { onDestroy, onMount } from "svelte";

  export let searchGames;
  export let active_view;
  export let searchValue;
  export let category;
  export let userState;
  export let autoSelected;

  let sectionActive = "";

  let brandGames;
  let brands = [{ name: "Proveedores", total: "" }];
  let brandSelected = { id: "brands" };
  let brandFilter = {};
  let onlyGames = true;

  let brandName = { name: "menu" };
  let providerName = "Proveedores";
  let sections = [
    { code: "ALL", name: "Todos los Juegos", total: null },
    { code: "TOP", name: "TOP GAMES", total: null},
    //{ code: "POP", name: "POPULARES", total: null },
    { code: "NEW", name: "NUEVOS", total: null },
    //{ code: "DROP", name: "DROPS & WINS", total: null },
    { code: "CLAS", name: "OTROS JUEGOS", total: null },
  ];

  onMount(async () => {
    const data = await backend.getBrandList(category);
    brands = data;
    if (autoSelected && autoSelected.filter == "brand") {
      brandSelected = autoSelected.brand;
      onSelectBrand(autoSelected.brand);
    }
  });

  const onSelectBrand = async (brand) => {
    if (!brand) {
      return;
    }
    if (brand.code == "brands") {
      sectionActive = "";
      return;
    }
    brandSelected = brand;
    brandFilter = { brand: brand.code };
    const data = await backend.getGameList(category, brandFilter);
    brandGames = data;
    sectionActive = "brand";
  };

  onDestroy(() => {
    autoSelected = null;
  });

  const cleanFilters = () => {
    searchValue = "";
  };

  const showFavs = async () => {
    cleanFilters();
    if (userState !== "logout") {
      sectionActive = "favs";
    }
  };

  const onGoTo = (section) => {
    sectionActive = "";
    if (section.code == "ALL") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector("#" + section.code + "-section");
    if (!el) return;
    el.scrollIntoView({ behavior: "auto" });
  };
  alert(providerName)
</script>

<div class="u-sub-slot">
  <div class="u-sub-navbar-slot">
    <!--DropDownButton
      test={'asd'}
      items={sections}
      onSelectItem={(item) => onGoTo(item)}
    /-->
    <DropDownButton
      title={providerName}
      bind:items={brands}
      onSelectItem={(item) => onSelectBrand(item)}
      bind:value={brandSelected.id}
    />
  </div>
  <div class="u-sub-navbar-slot">
    <ButtonFav on:click={showFavs} />
    <Search
      bind:active_view
      bind:searchGames
      bind:searchValue
      bind:category
      bind:sectionActive
      bind:onlyGames
    />
  </div>
</div>

<style>
  .u-sub-navbar-slot{
    position: relative;
  }
  @media only screen and (max-width: 1023px) {
    .u-sub-navbar-slot {
      display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    position: relative;
    margin: 0.5rem 1rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    .u-sub-navbar-slot {
      width: 100%;
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
    .u-sub-slot {
      display: flex;
      flex-direction: row;
      position: relative;
    }
  }
  @media only screen and (min-width: 1800px) {
    .u-sub-slot {
    padding: 0 12rem;
    }
  }
</style>
