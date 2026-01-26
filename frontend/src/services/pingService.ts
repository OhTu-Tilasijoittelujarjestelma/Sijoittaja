async function pingServer(): Promise<string> {
  const response = await fetch("http://sijoittaja-backend-svc/ping", {
    method: "GET",
  });

  return response.text();
}

export default pingServer;
