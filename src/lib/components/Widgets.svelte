<script>
    import Configuration from "../../config";

    const conf = Configuration.getConfiguration();
    let sportbookWidgetsUrl = `${conf.GAMEAPI_URL}/e-digtain/widget?domain=coliseo&language=es`
</script>

<div>
    {#if sportbookWidgetsUrl != ""}
    <iframe class="widgets"  id="widgets-iframe" title="" src={sportbookWidgetsUrl} frameborder="0" />
  {/if}
</div>

<style>
.widgets{
    width: 100%;
    height: 20rem;
    position: relative;
    z-index: 1;
    margin: 3rem 0px;
}
@media only screen and (max-width: 1023px) {
    .widgets{
    height: 22rem;
    margin: 0;
}
}

</style>