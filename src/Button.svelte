<script>
  export let label, height = 1, width = 1, alternative = false, press;
</script>

<style>
  section {
    background-color: green;
    position: relative;
    border: 1px solid #e8e8e8;
  }

  div {
    line-height: 100%;
    font-size: 7vw;
    text-align: center;
    font-family: monospace;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .primary {
    background-color: #f5f5f5;
    color: #111;
    border-color: #e8e8e8;
  }

  .alternative {
    background-color: #D1393E;
    color: #f5f5f5;
    border-color: #b82b2f;
  }
</style>

<section
  style="grid-row: span {height}; grid-column: span {width};"
  class={alternative ? 'alternative' : 'primary'}
  on:click={press(label)}
>
  <div>{label}</div>
</section>
