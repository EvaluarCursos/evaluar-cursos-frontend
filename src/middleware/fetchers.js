import { BadRequestError, HTTPError, UnauthorizedError } from "./http-errors";

const API_URL = process.env.REACT_APP_API_URL;

function throwError(response, message) {
  if (response.status === 400) {
    throw new BadRequestError(message);
  } else if (response.status === 401) {
    throw new UnauthorizedError(message);
  } else {
    throw new HTTPError(message);
  }
}

export async function login({ email, password }) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (res.ok) {
    return await res.json();
  } else {
    throwError(res);
  }
}

async function sendPartialForm({ formData, id, endpointComplement }) {
  const res = await fetch(`${API_URL}/${endpointComplement}/form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formData, id }),
  });

  if (!res.ok) {
    throwError(res);
  }
}

export async function sendForm({ formData, id }) {
  await sendPartialForm({
    id,
    formData: {
      q1: formData.q1,
      q2: formData.q2,
      q3: formData.q3,
      feedback: formData.feedback,
    },
    endpointComplement: "course",
  });

  await sendPartialForm({
    id,
    formData: {
      q1: formData.q4,
      q2: formData.q5,
      q3: formData.q6,
      q4: formData.q7,
      q5: formData.q8,
      q6: formData.q9,
      q7: formData.q10,
      feedback: formData.feedback,
    },
    endpointComplement: "teacher",
  });
}
