import { Input, Row, SearchContainer } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <Row>
        <h2>Publicações</h2>
        <span>10 publicações</span>
      </Row>
      <Input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  );
}
