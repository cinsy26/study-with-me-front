export const fetchLatestStudiesApi = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/studies/latest", {
      method: "GET",
      credentials: "include", // 세션 쿠키 포함 (로그인 유지용)
    });

    if (!response.ok) {
      throw new Error("최신 스터디 정보 조회 실패");
    }

    return await response.json();
  } catch (error) {
    console.error("최신 스터디 정보 조회 실패:", error);
    throw error;
  }
};
