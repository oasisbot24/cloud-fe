const OKEXOAuthSDK = {
  generateState: (): string => {
    return Math.random().toString(36).substring(2, 15);
  },

  authorize: ({
    client_id,
    redirect_uri,
    scope = "fast_api",
    response_type = "code",
    access_type = "offline",
    state,
  }: {
    client_id: string;
    redirect_uri: string;
    scope?: string;
    response_type?: string;
    access_type?: string;
    state: string;
  }) => {
    const authUrl = ` https://www.okx.com/account/authlogin?response_type=${response_type}&access_type=${access_type}&client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${scope}&state=${state}`;
    window.location.href = authUrl;
    // https://www.okx.com/account/authlogin?response_type=code&access_type=offline&client_id=undefined&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi-connection%2Fokx&scope=fast_api&state=bC6zbEOGeRpLtqqI
  },
};

export default OKEXOAuthSDK;
