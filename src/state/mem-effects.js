const url = "http://localhost:3001/mems/";

export function findAllMemsEffect() {
  return fetch(url).then(handleResponse).catch(handleError);
}

export function createMemEffect(mem) {
  return fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(mem),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function updateMemEffect(mem) {
  return fetch(url + mem.id, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(mem),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  if (response.status === 400) {
    const error = response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  console.error("API call failed. " + error);
  throw error;
}
