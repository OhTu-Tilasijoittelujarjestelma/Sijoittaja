const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://ohtuprojekti-staging.svc.cluster.local:3000";

async function pingServer(): Promise<string> {
  const response = await fetch(`${backendUrl}/ping`, {
    method: "GET",
  });

  return response.text();
}

export default pingServer;
