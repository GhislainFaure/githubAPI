// == Import
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import Message from '../Message';
import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';
import LoadMore from '../LoadMore';

import './style.scss';

/**
 * function qui nettoie les datas reçues de l'API de github
 * on renvoie uniquement les infos dont on aura besoin dans les props de Repo
 * @param {array} items tableau d'objets
 */
function filteredResults(items) {
  return items.map((item) => ({ 
         id: item.id,
         title: item.full_name, 
         imageUrl: item.owner.avatar_url, 
         owner: item.owner.login,
         description: item.description ?? 'no description',
      })
      );
}


// == Composant
function App () {

const [message, setMessage ] = useState("");
const [results, setResults] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery ] = useState('');
const [error, setError] = useState('');
const [page, setPage] = useState(1);


const reset = () => {
  setError('');
  setMessage('');
  setResults([]);
  setPage(1);
}






const loadData = async () => {
  
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&page=${page}&per_page=9`);
    // on deverse les résultats qui sont deja dans le state en 1er
    // on deverse les nouveaux résultats à la suite des premiers


    const newResults = [...results, ...response.data.items]
    setResults(newResults);
    setMessage(`La recherche a donné ${response.data.total_count} résultat(s)`);
    
  } catch (err) {
    setError(err.message);
    setResults([]);
  }
};

useEffect(() => {
  if(query) {
    loadData();
  }
},[query, page]);


 const changeQuery = () => {
  // ici on soumet le formulaire , c'est le bon endroit pour tout reset
  reset();
  setQuery(search)
 }
 const handleLoadMore = () => {
setPage(page + 1)
 }

  return (
    <div className="app">
          <Header />
          <SearchBar  
           inputValue={search}
           onChangeInputValue={setSearch}
           onSubmitForm={changeQuery}
          />
          <Message content={message}/>
          {error && <div>Une erreur est survenue : {error}</div>  }
          <ReposResults results={filteredResults(results)} />
          {results.length > 0  && <LoadMore onClickButton={handleLoadMore}/>
}
          
    </div>
  )


};
// == Export
export default App;
