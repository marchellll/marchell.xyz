<script>
  import mermaid from 'mermaid';

  // The default diagram
  export let diagram = `\
erDiagram
  CUSTOMER }|..|{ DELIVERY-ADDRESS : has
  CUSTOMER ||--o{ ORDER : places
  CUSTOMER ||--o{ INVOICE : "liable for"
  DELIVERY-ADDRESS ||--o{ ORDER : receives
  INVOICE ||--|{ ORDER : covers
  ORDER ||--|{ ORDER-ITEM : includes
  PRODUCT-CATEGORY ||--|{ PRODUCT : contains
  PRODUCT ||--o{ ORDER-ITEM : "ordered in"`;

  let container;

  async function renderDiagram() {
    console.log(diagram)
    try {
      const {svg} = await mermaid.render('mermaid', diagram)
      container.innerHTML=svg;
    } catch (error) {
      console.error(error)
    }
  }

  $: diagram && renderDiagram()
</script>

<main>
<span bind:this={container}>
</main>