<script>
  export let display = 0;
</script>

<style>
  section {
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 5;
    background-color: #392A36;
    color: #f5f5f5;
    position: relative;
    padding: 0 0.5em;
  }

  div {
    line-height: 100%;
    height: 100%;
    font-size: 15vw;
    text-align: right;
    font-family: monospace;
  }
</style>

<section>
  <div>{display}</div>
</section>
