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
    console.log(value);
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
      console.log();
      response({ data: message, error: null });
    } else {
      response({ data: null, error: message.message });
    }
  } catch (error) {
    response({ data: null, error: error.message });
  }
}

export async function SessionHandler(value, response) {
  try {
    const result = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/session`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": value.access_token,
        },
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
