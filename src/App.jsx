import { useRoutes } from "react-router-dom"
import { RouteList } from "./routes/routes"

function App() {

  const element = useRoutes(RouteList)

  return element
}

export default App
