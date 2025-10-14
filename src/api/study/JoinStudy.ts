export const joinStudy = async (studyId: number) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/studies/join?studyId=${studyId}`,
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`스터디 참여 실패: ${errorText}`);
    }

    const result = await response.text(); // 서버는 문자열 메시지를 반환 ("스터디에 참여하였습니다.")
    console.log("스터디 참여 성공:", result);
    return result;
  } catch (error) {
    console.error("스터디 참여 중 오류 발생:", error);
    throw error;
  }
};
