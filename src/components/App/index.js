// == Import
import { useState } from 'react';
import Header from '../Header';
import Message from '../Message';
import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';

import resultsData from '../../data/repos'
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

const [message, setMessage ] = useState("pas encore de résultat");
const [results, setResults] = useState(resultsData.items);
const [search, setSearch] = useState('');

const loadData = () => {
  console.log('je veux appeler mon API');
}



  return (
    <div className="app">
          <Header />
          <SearchBar  
           inputValue={search}
           onChangeInputValue={setSearch}
          />
          <Message content={message}/>
          <ReposResults results={filteredResults(results)} />
    </div>
  )


};
// == Export
export default App;
