import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "프로젝트 1",
    image: "/assets/images/project1.jpg",
    description: "설명을 입력하세요",
    content: "회원가입, 로그인, Google OAuth, 게시글 작성 기능을 구현했습니다.",
    github: "https://github.com/",
    site: "https://your-site.com",
  },
  {
    id: 2,
    title: "프로젝트 2",
    image: "/assets/images/project2.jpg",
    description: "설명을 입력하세요",
    content: "프로젝트 상세 내용을 입력하세요.",
    github: "",
    site: "",
  },
  {
    id: 3,
    title: "프로젝트 3",
    image: "/assets/images/project3.jpg",
    description: "설명을 입력하세요",
    content: "프로젝트 상세 내용을 입력하세요.",
    github: "",
    site: "",
  },
  {
    id: 4,
    title: "프로젝트 4",
    image: "/assets/images/project4.jpg",
    description: "설명을 입력하세요",
    content: "프로젝트 상세 내용을 입력하세요.",
    github: "",
    site: "",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <div className="max-w-7xl mx-auto px-8 py-10">
        <h1 className="text-5xl font-bold mb-3">도배하는 개발자</h1>

        <p className="text-muted-foreground mb-10">
          React, TypeScript, Supabase 기반 웹서비스 개발
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className="
                cursor-pointer
                rounded-2xl
                overflow-hidden
                border
                bg-card
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-60
                  object-cover
                "
              />

              <div className="p-4">
                <h3 className="font-bold text-xl">{project.title}</h3>

                <p className="text-muted-foreground mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="
            fixed
            inset-0
            bg-black/80
            z-50
            p-10
            overflow-y-auto
          "
        >
          <div
            className="
              max-w-6xl
              mx-auto
              bg-background
              rounded-3xl
              overflow-hidden
            "
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="
                w-full
                h-125
                object-cover
              "
            />

            <div className="p-10">
              <h2 className="text-4xl font-bold">{selected.title}</h2>

              <p className="mt-6 leading-8">{selected.content}</p>

              <div className="mt-8 flex gap-4">
                <a
                  href={selected.github}
                  target="_blank"
                  className="
                    px-5
                    py-3
                    rounded-xl
                    bg-zinc-800
                    text-white
                  "
                >
                  GitHub
                </a>

                <a
                  href={selected.site}
                  target="_blank"
                  className="
                    px-5
                    py-3
                    rounded-xl
                    bg-blue-600
                    text-white
                  "
                >
                  Demo
                </a>

                <button
                  onClick={() => setSelected(null)}
                  className="
                    px-5
                    py-3
                    rounded-xl
                    border
                  "
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
