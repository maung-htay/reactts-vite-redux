
import { Provider } from 'react-redux'
import Header from './components/Header'
import Post from './components/Post'
import Posts from './components/Posts'
import { DUMMY_POST } from './dummy-post'
import { store } from './store/store'

function App() {


  return (
    <Provider store={store}>
      <Header />
      <Posts>
        {DUMMY_POST.map((post) => (
          <li key={post.id}>
            <Post {...post} />
          </li>
        ))}
      </Posts>
    </Provider>
  )
}

export default App
