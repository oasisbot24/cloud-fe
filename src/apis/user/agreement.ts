import api from "@/apis/network";

interface AgreementBody {
  essentialAgreement: boolean;
  adAgreement: boolean;
}

async function postAgreement(body: AgreementBody): Promise<void> {
  await api.post<ApiResponseType<void>>("/agreement", body);
}

export { postAgreement };
