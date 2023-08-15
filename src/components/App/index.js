// == Import
import Header from '../Header';
import Message from '../Message';
import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';
import './style.scss';

// == Composant
function App () {
  return (
    <div className="app">
          <Header />
          <SearchBar />
          <Message />
          <ReposResults />

    </div>
  )


};
 

// == Export
export default App;
