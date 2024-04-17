import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


import { Input, Row, SearchContainer } from "./styles";

const searchSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchSchema>;

interface SearchProps {
  totalPosts: number
  fetchPosts: (query?: string) => Promise<void>
}

export function Search({totalPosts, fetchPosts}: SearchProps) {

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchSchema),
  });

  async function handleSearch({ query }: SearchFormInputs) {
    await fetchPosts(query);
  }

  return (
    <SearchContainer>
      <form onSubmit={handleSubmit(handleSearch)}>
        <Row>
          <h2>Publicações</h2>
          <span>{totalPosts} publicações</span>
        </Row>
        <Input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </form>
    </SearchContainer>
  );
}
