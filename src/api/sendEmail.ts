export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
      }/send-email`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao enviar:", error);
    return { success: false, message: "Erro de conexão com o servidor." };
  }
};
