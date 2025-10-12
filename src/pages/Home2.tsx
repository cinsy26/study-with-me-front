import React from "react";

export default function Home() {
  const recentStudies = [
    {
      id: 1,
      title: "코딩테스트 매일 풀기",
      members: 28,
      maxMembers: 30,
      category: "알고리즘",
      daysLeft: 3,
    },
    {
      id: 2,
      title: "TOEIC 900점 달성",
      members: 15,
      maxMembers: 20,
      category: "토익",
      daysLeft: 5,
    },
    {
      id: 3,
      title: "정보처리기사 실기 합격",
      members: 22,
      maxMembers: 25,
      category: "자격증",
      daysLeft: 2,
    },
    {
      id: 4,
      title: "리액트 마스터 클래스",
      members: 18,
      maxMembers: 25,
      category: "프론트엔드",
      daysLeft: 7,
    },
  ];

  const myStudies = [
    {
      id: 1,
      title: "알고리즘 스터디",
      progress: 75,
      nextMission: "오늘 23:00까지",
      status: "active",
    },
    {
      id: 2,
      title: "영어 회화 스터디",
      progress: 60,
      nextMission: "내일 20:00까지",
      status: "active",
    },
  ];

  const recommendedTags = [
    "알고리즘",
    "토익",
    "면접 준비",
    "정보처리기사",
    "리눅스마스터",
    "오픽",
    "JLPT",
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <div
        style={{ maxWidth: "1400px", margin: "0 auto", padding: "40px 20px" }}>
        {/* 상단 영역: 검색 + 포인트 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: "20px",
            marginBottom: "32px",
          }}>
          {/* 검색 섹션 */}
          <div
            style={{
              backgroundColor: "#3b82f6",
              borderRadius: "16px",
              padding: "40px",
            }}>
            {/* 검색바 */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="관심있는 스터디를 검색해보세요..."
                style={{
                  flex: 1,
                  padding: "16px 20px",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "16px",
                  outline: "none",
                }}
              />
              <button
                style={{
                  padding: "16px 32px",
                  backgroundColor: "white",
                  color: "#3b82f6",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}>
                검색
              </button>
            </div>

            {/* 추천 태그 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "16px",
              }}>
              {recommendedTags.map((tag) => (
                <button
                  key={tag}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "20px",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.2)";
                  }}>
                  {tag}
                </button>
              ))}
            </div>

            {/* 새 스터디 시작하기 버튼 */}
            <button
              onClick={() => alert("스터디 생성 페이지로 이동")}
              style={{
                width: "100%",
                padding: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                border: "2px dashed rgba(255, 255, 255, 0.5)",
                borderRadius: "12px",
                fontSize: "15px",
                color: "white",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.15)";
              }}>
              + 새 스터디 시작하기
            </button>
          </div>

          {/* 포인트 섹션 */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "40px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "12px",
                color: "#6b7280",
              }}>
              나의 포인트
            </h3>

            <div
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#3b82f6",
                marginBottom: "20px",
              }}>
              12,500P
            </div>

            <button
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "bold",
                cursor: "pointer",
                marginBottom: "8px",
              }}>
              포인트 충전
            </button>

            <button
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "white",
                color: "#3b82f6",
                border: "2px solid #3b82f6",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "bold",
                cursor: "pointer",
              }}>
              사용 내역
            </button>
          </div>
        </div>

        {/* 진행 중인 스터디 */}
        <div style={{ marginBottom: "32px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}>
            진행 중인 스터디
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}>
            {myStudies.map((study) => (
              <div
                key={study.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "24px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-4px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}>
                  <h3
                    style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>
                    {study.title}
                  </h3>
                  <span
                    style={{
                      backgroundColor: "#10b981",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}>
                    진행중
                  </span>
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "14px",
                      color: "#6b7280",
                      marginBottom: "8px",
                    }}>
                    <span>진행률</span>
                    <span>{study.progress}%</span>
                  </div>
                  <div
                    style={{
                      height: "8px",
                      backgroundColor: "#e5e7eb",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${study.progress}%`,
                        backgroundColor: "#3b82f6",
                        transition: "width 0.3s",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 최신 스터디 */}
        <div>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}>
            ✨ 최신 스터디
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}>
            {recentStudies.map((study) => (
              <div
                key={study.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-4px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "12px",
                  }}>
                  <div>
                    <span
                      style={{
                        backgroundColor: "#dbeafe",
                        color: "#3b82f6",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}>
                      {study.category}
                    </span>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        margin: "8px 0",
                      }}>
                      {study.title}
                    </h3>
                  </div>
                  <span
                    style={{
                      backgroundColor: "#fef3c7",
                      color: "#f59e0b",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}>
                    {study.daysLeft}일 남음
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    color: "#6b7280",
                  }}>
                  <span>
                    👥 {study.members}/{study.maxMembers}명
                  </span>
                  <span>•</span>
                  <span>
                    {Math.round((study.members / study.maxMembers) * 100)}% 달성
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
