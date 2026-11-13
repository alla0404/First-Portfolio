import {
  List,
  Lightbulb,
  BriefcaseBusiness,
  Images,
  MessageCircle,
} from "lucide-react";

// 게시글 목록에서 사용하는 카테고리
export const CLASS_CATEGORY = [
  { id: 1, label: "전체", category: "", icon: <List /> },
  { id: 2, label: "노하우", category: "knowhow", icon: <Lightbulb /> },
  {
    id: 3,
    label: "비즈니스",
    category: "business",
    icon: <BriefcaseBusiness />,
  },
  {
    id: 4,
    label: "포트폴리오",
    category: "portfolio",
    icon: <Images />,
  },
  {
    id: 5,
    label: "자유소통",
    category: "community",
    icon: <MessageCircle />,
  },
];

// 게시글 작성 및 수정에서 사용하는 카테고리
export const Topic_CATEGORY = [
  { id: 1, label: "노하우", category: "knowhow" },
  { id: 2, label: "비즈니스", category: "business" },
  { id: 3, label: "포트폴리오", category: "portfolio" },
  { id: 4, label: "자유소통", category: "community" },
];
