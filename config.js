/**
 * ============================================
 *  모바일 청첩장 설정 파일
 *  이 파일만 수정하면 청첩장이 완성됩니다.
 *
 *  이미지는 설정이 필요 없습니다.
 *  아래 폴더에 1.jpg, 2.jpg, ... 순서로 넣어주세요:
 *    images/hero/1.jpg       — 메인 사진 (1장)
 *    images/story/1.jpg ...  — 스토리 사진 (자동 감지)
 *    images/gallery/1.jpg ...— 갤러리 사진 (자동 감지)
 *    images/location/1.jpg   — 오시는 길 사진 (1장)
 *    images/og/1.jpg         — OG 공유 썸네일 (1장)
 * ============================================
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "범희",
    lastName: "원",
    fullName: "원범희",
    father: "원용학",
    mother: "박순덕",
    fatherDeceased: false, // 故인이면 true
    motherDeceased: false,
  },

  bride: {
    name: "현진",
    lastName: "김",
    fullName: "김현진",
    father: "김세덕",
    mother: "이상우",
    fatherDeceased: false,
    motherDeceased: false,
  },

  wedding: {
    date: "2026-08-22",        // YYYY-MM-DD
    time: "17:20",             // HH:MM (24시간)
    dayOfWeek: "토요일",
    venue: "웨딩그룹위더스 안양",
    hall: "메리엘홀 9층",
    address: "경기 안양시 만안구 안양로 104",
    tel: "031-468-6600",
    mapLinks: {
      kakao: "https://place.map.kakao.com/877653040",
      naver: "https://naver.me/xX75rN8t",
    },
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content:
      "싱그러운 여름의 한가운데서\n저희 두 사람이 평생을 약속하게 되었습니다.\n\n무더위에도 저희를 향해\n 발걸음 해주시는 감사한 마음들을 생각하며,\n서로를 아끼는 부부가 되겠습니다.\n\n기쁜 날, 오셔서 축복해 주세요.",
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content:
      "서로 다른 계절을 살아온 두 사람이 만나,\n가장 뜨거운 여름날 하나의 길을 시작합니다.\n\n무더위를 뚫고 찾아와주실\n 여러분의 소중한 발걸음을 기억하며,\n언제나 서로의 든든한 편이 되어\n 행복하게 살겠습니다.\n\n소중한 자리에 여러분을 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "원범희", bank: "신한은행", number: "110-383-324465" },
      { role: "아버지", name: "원용학", bank: "우리은행", number: "307-194911-02-004" },
      { role: "어머니", name: "박순덕", bank: "우리은행", number: "074-714897-02-001" },
    ],
    bride: [
      { role: "신부", name: "김현진", bank: "기업은행", number: "124-114507-01-019" },
      { role: "아버지", name: "김세덕", bank: "기업은행", number: "270-100582-01-010" },
      { role: "어머니", name: "이상우", bank: "국민은행", number: "627702-96-142928" },
    ],
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    // Kakao Developers 앱키 (JavaScript 키)
    appKey: "",
    title: "원범희 ♥ 김현진 결혼합니다",
    description: "2026년 8월 22일 토요일 오후 5시 20분\n위더스 안양",
    image: "https://hjin1028kim.github.io/my-wedding/images/og/1.jpg",
    imageUrl: "https://hjin1028kim.github.io/my-wedding/images/og/1.jpg",
  },

  meta: {
    title: "원범희 ♥ 김현진 결혼합니다",
    description: "2026년 8월 22일 토요일 오후 5시 20분\n위더스 안양",
  },
};
