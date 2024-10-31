<script>
  //export let open;
  import backend from "../../../../server"
  import EventManager from "../../../../js/EventManager";
  import { onMount } from 'svelte';
  import moment from "moment-timezone";
    
  export let user;

  let from = new Date(), dayFrom, monthFrom, yearFrom;
  let to = new Date(), dayTo, monthTo, yearTo;
  let dateStringFrom, dateStringTo;
  let filter;
  let movements=[];
  let active_section="record";

  onMount(()=> {
    monthFrom = '' + (from.getMonth() + 1),
    dayFrom = '' + (from.getDate() - from.getDate() +1),
    yearFrom = from.getFullYear();

    monthTo = '' + (to.getMonth() + 1),
    dayTo = '' + to.getDate(),
    yearTo = to.getFullYear();

    if (monthFrom.length < 2) monthFrom = '0' + monthTo;
    if (dayFrom.length < 2) dayFrom = '0' + dayFrom;
    dateStringFrom = [yearFrom, monthFrom, dayFrom].join('-');

    if (monthTo.length < 2) monthTo = '0' + monthTo;
    if (dayTo.length < 2) dayTo = '0' + dayTo;
    dateStringTo = [yearTo, monthTo, dayTo].join('-');
  });

  const convertDateTimeZone = (lfecha) => {
    var date = new Date(lfecha * 1000);
    let month = "0"+ (date.getMonth()+1);
    let day = "0"+ date.getDate();
    let hours = "0"+ date.getHours();
    let minutes = "0"+ date.getMinutes();
    let seconds = "0"+ date.getSeconds();
    return  date.getFullYear() + '-' + month.substr(-2) +'-'+ day.substr(-2) + ' ' +  hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) +'.'+date.getMilliseconds();
  }

  const getMovements = async ()=>{
    try {
        let data = await backend.getMovements(user.token, dateStringFrom, dateStringTo, filter );
        movements = data;
        movements.map((m) => {
          m.currentDate = moment(m.lfecha*1000).tz('America/Argentina/Buenos_Aires').format("YYYY-MM-DD HH:mm:ss");
        })
      } catch (error) {
        let msg = "Error"
        EventManager.publish("notify", {mode:"error", msg: msg});
      }
  };

</script>

<div class="u-content-info">
  <div style="display: flex; align-items: center; gap:0.5rem;">
    <button class="opc  {active_section=='balance'?'u-opc-select':''}" on:click={()=>{ active_section="balance" }}>
      Historial
    </button><span><b>Zona Horaria:</b> America/Argentina/Buenos_Aires</span>
  </div>
  <div class="content-filters">
    <label for="stardate">Desde:
      <input class="u-form-control" type="date"  bind:value={dateStringFrom}>
    </label>
    <label for="fromdate">Hasta:
      <input class="u-form-control" type="date"  bind:value={dateStringTo}>
    </label>
    <label for="fromdate">Filtros:
      <select class="u-form-control" name="filtros" bind:value={filter}>
        <option value="TT">TODOS</option>
        <option value="DE">DEPOSITOS</option>
        <option value="RE">RETIROS</option>
        <option value="PR">PREMIOS</option>
      </select>
    </label>
    <label for="search">Consultar:
      <button class="u-form-control btn-consult" on:click={getMovements}>Consultar</button>
    </label>
  </div>
    <div class="u-show-info">
        {#if !movements.length }
        <div class="u-no-record">
            <span class="u-no-record-title">No hay nada aquí todavía</span>
            <span>Las transacciones aparecerán cuando deposite o retire dinero</span>
        </div>
        {:else}

        <div class="u-show-data">
          {#each movements as mov}
            <div class="u-data-info"> 
              <div class="u-data-ID"> 
                <span>{mov.id}</span>
              </div>
              <div class="u-data-items">
                <div class="u-item">
                  <span class="u-sub-title">Fecha:</span>  
                  <span>{mov.currentDate} </span>
                </div>
                <div class="u-item">
                  <span class="u-sub-title">Monto:</span> 
                  <span>{mov.monto.toFixed(2)}</span>
                </div>
                <div class="u-item">
                  <span class="u-sub-title">Concepto:</span>
                  <span>{mov.tipo_operacion}</span> 
                </div>
                <div class="u-item">
                  <span class="u-sub-title">Serial/referencia</span>
                  <span class="referencial">{mov.ref_op}</span>
                </div>
              </div>     
            </div>
          {/each}
        </div>
        {/if}
    </div>
</div>


<style>
  *{
    color: #000;
  }
  .u-content-info{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
  .content-filters{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
  .opc{
    background-color: #bc001e;
    padding: 0.5rem;
    border-radius: 0.3rem;
    color: white;
    border: none;
    display: flex;
    flex-direction: column;
  }
  .btn-consult{
    background: #28A745;
    color: white;
    border: none;
    cursor: pointer;
  }
  .u-opc-select{
    background:linear-gradient(70deg, #d19d03, #bc001e);
    color: white  !important;
  }
  .u-show-data{
    overflow-y: scroll;
    height: 30vh;
  }
  .u-show-data::-webkit-scrollbar{
    background: linear-gradient(70deg, #5d007f, #3382d1);
    width: 10px;
    height: 10px;
  }
  .u-show-data::-webkit-scrollbar-thumb {
    background:linear-gradient(70deg, #d19d03, #bc001e);
    border-radius: 20px;
    border: 2px solid #f1f2f3;
}
  .u-data-info{
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    overflow-x: hidden;
    padding: 0.5rem;
  }
  .u-data-ID{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    background:linear-gradient(70deg, #d19d03, #bc001e);
    border-radius: 0.3rem;
    padding: 0.3rem;
    display: flex;
    color: white;
  }
  .u-sub-title {
     background:linear-gradient(70deg, #ff7802, #bc001e);
    -webkit-background-clip: text;
    color: transparent;
  }
  .u-data-items{
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .u-item{
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    gap: 0.5rem;
    height: 100%;
    
  }
  .referencial{
    text-align: center;
    width: 100%;
    word-wrap: break-word;
  }
  .u-no-record{
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
  }
  
</style>
