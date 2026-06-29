const API_URL = "/api";

interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: any;
  headers?: Record<string, string>;
}

export async function api<T>(path: string, options: RequestOptions): Promise<T> {
  try {
    // const token = localStorage.getItem("token");

    const response = await fetch(API_URL + path, {
      method: options.method,
      headers: {
        "Content-Type": "application/json",
         Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE1ZTQ0YzExLTQ5YzQtNGVmZi05YWVjLTMyNjRhNmM0NTQ0MCIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE3ODI2NjgxNTcsImV4cCI6MTc4MjkyNzM1N30.NZoHmcv1AsJmPVvMTr6K8sa0RqRDaNX55Nz8fmsR2rY",
 
        // ...(token ? { "Authorization": `Bearer ${token}` } : {}), 
      },
      body: options.method !== "GET" && options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`خطا در سرور: ${response.status}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error(`خطا در درخواست ${path}:`, error);
    throw error;
  }
}
