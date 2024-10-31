<script>
  export let active_view;

  const changeView = (view) => {
    active_view = view;
  };
</script>

<div>
  <section class="menuBarButtons">
    <button
      on:click={() => (active_view = "sportbook")}
      type="button"
      class="u-btn {active_view == 'sportbook' ? 'u-active' : ''}"
      ><img src="./menubar/sport.png" alt="" />Apuestas Deportivas</button
    >
    <button
      type="button"
      on:click={() => (active_view = "slot")}
      class="u-btn {active_view == 'slot' ? 'u-active' : ''}"
      ><img src="./menubar/slot.png" alt="" />Casino</button
    >
    <button
      type="button"
      on:click={() => (active_view = "slotlive")}
      class="u-btn {active_view == 'slotlive' ? 'u-active' : ''}"
      ><img src="./menubar/casino.png" alt="" />Casino en Vivo</button
    >
    <button
      type="button"
      on:click={() => (active_view = "horses")}
      class="u-btn {active_view == 'horses' ? 'u-active' : ''}"
      ><img src="./menubar/horse.png" alt="" />Apuestas Hipicas</button
    >
  </section>
</div>

<style>

@media only screen and (max-width:1200px){
  .menuBarButtons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1px;
    background: #25114e;
    padding-top: 10px;
    padding-bottom: 2px;
  }
  .u-btn {
    display: flex;
    flex-direction: column;
    background-color: #020113;
    border-color: #020113;
    color: white;
    width: 160px;
    height: 60px;
    gap: 2px;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    border-radius: 10px;
  }
  .u-btn img {
    width: 30px;
    height: 30px;

  }
  .u-active {
    background: linear-gradient(70deg, #0c52df, #380c5e);
  }
}

@media only screen and (max-width: 1200px) and (orientation: landscape) {
  .menuBarButtons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1px;
    background: #25114e;
    padding-top: 10px;
    padding-bottom: 2px;
  }
  .u-btn {
    display: flex;
    flex-direction: column;
    background-color: #020113;
    border-color: #020113;
    color: white;
    width: 160px;
    height: 60px;
    gap: 2px;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    border-radius: 10px;
  }
  .u-btn img {
    width: 30px;
    height: 30px;

  }
  .u-active {
    background: linear-gradient(70deg, #0c52df, #380c5e);
  }
}

@media only screen and (min-width: 1200px) {
  .menuBarButtons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1px;
    padding-top: 10px;
    padding-bottom: 2px;
  }
  .u-btn {
    display: none;
  }

}
</style>
