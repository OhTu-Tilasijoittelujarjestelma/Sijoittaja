async function pingServer(): Promise<string> {
  const response = await fetch("https://sijoittaja-backend-svc/ping", {
    method: "GET",
  });

  return response.text();
}

export default pingServer;
