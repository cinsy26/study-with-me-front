export const FetchStudyDetail = async (studyId: number) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/studies/detail?studyId=${studyId}`,
      {
        method: "GET",
        credentials: "include", // 세션 쿠키 포함
      }
    );

    if (!response.ok) {
      throw new Error("스터디 상세 정보 조회 실패");
    }

    return await response.json();
  } catch (error) {
    console.error("스터디 상세 정보 조회 실패:", error);
    throw error;
  }
};
