import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const AppQueryClientProvider = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default AppQueryClientProvider;
