<script>
  import Display from './Display.svelte';
  import Button from './Button.svelte';

  import { stack, update } from './Calculator.js';

  const press = value => () => stack.update(s => update(s, value));
</script>

<style>
  section {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(4, 1fr);

    width: 100%;
    height: 100%;
  }
</style>

<section>
  <Display/>
  <Button label={'AC'} press={press} />
  <Button label={'+/-'} press={press} />
  <Button label={'%'} press={press} />
  <Button label={'÷'} alternative press={press} />
  <Button label={7} press={press} />
  <Button label={8} press={press} />
  <Button label={9} press={press} />
  <Button label={'x'} alternative press={press} />
  <Button label={4} press={press} />
  <Button label={5} press={press} />
  <Button label={6} press={press} />
  <Button label={'-'} alternative press={press} />
  <Button label={1} press={press} />
  <Button label={2} press={press} />
  <Button label={3} press={press} />
  <Button label={'+'} alternative press={press} />
  <Button label={0} width={2} press={press} />
  <Button label={'.'} press={press} />
  <Button label={'='} alternative press={press} />
</section>
