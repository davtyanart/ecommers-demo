import './styles/App.scss';
import Layout from './components/Layout/Layout';
import Header from './containers/Header/Header';
import Auth from './containers/Authentication/Auth';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Auth />
      </Layout>
    </div>
  );
}

export default App;
