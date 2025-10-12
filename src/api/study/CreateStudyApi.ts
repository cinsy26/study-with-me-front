import axios from "axios";

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: "http://localhost:8080", // 개발용, 배포 시 환경변수 처리 권장
  withCredentials: true, // 쿠키 인증 허용 (세션 로그인 등)
});

// ✅ 요일 enum 타입 (백엔드의 Weekday와 일치)
export type Weekday = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

// ✅ 스터디 생성 요청 DTO
export interface StudyCreateRequest {
  title: string;
  description: string;
  memberLimit: number;
  startDate: string; // ISO 형식 (예: '2025-10-15')
  endDate: string;
  missionDescription: string;
  depositAmount: number;
  penaltyAmount: number;
  missionDays: Weekday[];
}

// ✅ 스터디 생성 응답 DTO
export interface StudyCreateResponse {
  studyId: number;
}

// ✅ API 함수: 스터디 생성
export const createStudy = async (
  data: StudyCreateRequest
): Promise<StudyCreateResponse> => {
  try {
    const response = await api.post<StudyCreateResponse>("/api/studies", data);
    return response.data;
  } catch (error: any) {
    console.error("스터디 생성 실패:", error.response?.data || error.message);
    throw error;
  }
};
