import React from "react";
import styles from "@/styles/Home.module.css";
import { cx } from "emotion";
import pokemon from "@/public/pokemon.json";
import axios from "axios";
import Pagination from "@/components/commons/pagination";
import { Cards } from "@/components/commons/boxCard";
import { useMutation } from "react-query";
import { useModal } from "@/components/commons/modals/useModals";
import { ModalPokemon } from "@/components/commons/modals";

const Homepage = () => {
  const [list, setList] = React.useState<any[]>([]);
  const [selected, setSelected] = React.useState<any>(null);
  const [keyword, setKeyword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const PageSize = 20;

  const filterData = React.useMemo(() => {
    if (keyword !== "" && list.length > 0) {
      return list.filter((item) => item.name.indexOf(keyword) > 0);
    }

    return list;
  }, [list, keyword]);

  const currentData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filterData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filterData]);
  const fetchPokemon = (): Promise<any> => {
    const detailPokemonList = pokemon.results.map((e) =>
      axios
        .get(e.url)
        .then((e) => e.data)
        .catch(() => {})
    );
    return Promise.all(detailPokemonList);
  };
  const mutation = useMutation({
    mutationFn: () => fetchPokemon(),
    onSuccess: (data) => {
      setList(data);
    },
  });

  React.useEffect(() => {
    mutation.mutate();
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.headling}>
            <h1 className={styles.title}>Pokedéx</h1>
            <div className={styles.row}>
              <div className={styles.col}>
                <p className={styles.subtitle}>
                  Search for Pokémon by using the name or their National Pokédex
                  number
                </p>
              </div>
              <div className={cx(styles.col, styles.end)}>
                <input
                  className={styles.searchbox}
                  onChange={(event) => setKeyword(event.target.value)}
                  type="text"
                  placeholder="Search by Pokedex # or Name"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.grid}>
            {mutation.isLoading && "loading..."}
            {currentData.map((e, i) => (
              <div
                onClick={() => {
                  setOpen(true);
                  setSelected(e);
                }}
                key={e.id}
              >
                <Cards
                  id={e.id}
                  power={e.types}
                  name={e.name}
                  url={e.sprites.front_default}
                />
              </div>
            ))}
          </div>
        </div>

        <Pagination
          currentPage={currentPage}
          totalCount={filterData.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>

      {selected !== null && (
        <ModalPokemon open={open} setOpen={setOpen} data={selected} />
      )}
    </>
  );
};

export default Homepage;
