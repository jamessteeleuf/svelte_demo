<script>
  import Display from './Display.svelte';
  import Button from './Button.svelte';
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
  <Button label={'AC'}/>
  <Button label={'+/-'}/>
  <Button label={'%'}/>
  <Button label={'÷'} alternative/>
  <Button label={7}/>
  <Button label={8}/>
  <Button label={9}/>
  <Button label={'x'} alternative/>
  <Button label={4}/>
  <Button label={5}/>
  <Button label={6}/>
  <Button label={'-'} alternative/>
  <Button label={1}/>
  <Button label={2}/>
  <Button label={3}/>
  <Button label={'+'} alternative/>
  <Button label={0} width={2}/>
  <Button label={'.'}/>
  <Button label={'='} alternative/>
</section>
