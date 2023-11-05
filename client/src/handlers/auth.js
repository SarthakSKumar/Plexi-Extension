export async function SignUpHandler(value, response) {
  try {
    const result = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      }
    );
    const { message } = await result.json();
    if (result.status === 200) {
      response({ data: message, error: null });
    } else {
      response({ data: null, error: message });
    }
  } catch (error) {
    response({ data: null, error: error.message });
  }
}

export async function SignInHandler(value, response) {
  try {
    const result = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      }
    );
    const message = await result.json();

    if (result.status === 200) {
      response({ data: message, error: null });
    } else {
      response({ data: null, error: message.message });
    }
  } catch (error) {
    response({ data: null, error: error.message });
  }
}
