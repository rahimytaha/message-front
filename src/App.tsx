
import { RouterProvider } from 'react-router'

import router from './core/routes/routes'

function App() {

  return (
    <>
    
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
