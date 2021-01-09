import './App.css';
import Layout from './components/Layout/Layout';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <main className='app-main-content'>
          <span>Products</span>
        </main>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
