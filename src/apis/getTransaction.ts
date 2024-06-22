import api from "@/apis/network";




async function getTransaction(): Promise<[]> {
  const res = await api.get<ApiResponseType<[]>>(
      `/transaction?exchange=all`,
  );
  return res.data?.data;
}

export { getTransaction };

