import ReactDOM from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { routeTree } from "./routeTree.gen"

const queryClient = new QueryClient()

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
})

const rootElement = document.getElementById("app")!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <QueryClientProvider client={queryClient}>
      <h1>NewsNow - 全网实时热点聚合阅读平台</h1>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  )
}

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
