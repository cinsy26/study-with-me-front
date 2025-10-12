// src/api/study/getMyEndedStudies.ts

export const getMyEndedStudies = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/studies/my-ended", {
      method: "GET",
      credentials: "include", // 세션 쿠키 포함
    });

    if (!response.ok) {
      throw new Error("종료된 스터디 조회 실패");
    }

    return await response.json();
  } catch (error) {
    console.error("종료된 스터디 조회 실패:", error);
    throw error;
  }
};
