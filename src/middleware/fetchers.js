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
  //AGREGUE /USUARIO A LA URL
  const res = await fetch(`${API_URL}/usuario/log`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (res.ok) {
    return await res.json();
  } else {
    throwError(res);
  }
}

async function sendPartialForm({ formData, id, endpointComplement,userId }) {
  
  const res = await fetch(`${API_URL}/${endpointComplement}/form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formData, id ,userId}, (k, v) => v ?? null),
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
    endpointComplement: "evaluacion-materia",
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
    endpointComplement: "evaluacion-profesor",
  });
}

export async function search({ userId, semester, faculty }) {
  

  //AGREGUE SLASH DESPUES DEL USER ID
  const res = await fetch(
    `${API_URL}/courses/${userId}/?semester=${semester}&faculty=${faculty}`
  );

  if (res.ok) {
    return await res.json();
  } else {
    throwError(res);
  }
}

export async function getInform({ userId, courseId }) {
  console.log(userId,courseId)
  console.log(courseId)
  if (!(userId && courseId)) {
    throw new Error("Missing userId or courseId");
  }

  //AGREGUE UNA S A COURSE 
  const res = await fetch(`${API_URL}/courses/${userId}/${courseId}`);

  if (res.ok) {
    return await res.json();
  } else {
    throwError(res);
  }
}
