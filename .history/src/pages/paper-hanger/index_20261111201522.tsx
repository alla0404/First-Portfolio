export default function paperHanger() {
  return (
    <section className="grid lg:grid-cols-2 gap-12 items-center min-h-175">
      {/* 왼쪽 이미지 */}
      <div>
        <img
          src="/assets/images/dobae.jpg"
          alt="도배 작업"
          className="
        w-full
        h-162.5
        object-cover
        rounded-3xl
        shadow-xl
      "
        />
      </div>

      {/* 오른쪽 소개 */}
      <div className="space-y-8">
        <div>
          <p className="text-blue-500 font-semibold">WALLPAPER & DEVELOPER</p>

          <h1 className="text-6xl font-bold leading-tight mt-3">
            도배하는 개발자
          </h1>
        </div>

        <p className="text-lg leading-9 text-muted-foreground">
          저는 오랜 시간 도배와 인테리어 현장에서 일해왔습니다. 수많은 고객을
          만나고, 다양한 인테리어 업자들과 협업하면서 한 가지 문제를
          발견했습니다. 고객은 믿을 수 있는 시공업자를 찾기 어렵고, 실력 있는
          업자들은 자신을 알릴 공간이 부족했습니다.
        </p>

        <p className="text-lg leading-9 text-muted-foreground">
          이러한 문제를 직접 해결해보고 싶다는 생각이 프로그래밍을 시작하게 된
          가장 큰 계기였습니다. 저는 현장에서 얻은 경험과 개발 기술을 결합하여
          고객과 업자를 더 쉽게 연결하고, 서로 신뢰할 수 있는 생태계를 만드는
          서비스를 만들어가고 있습니다.
        </p>

        <p className="text-lg leading-9 text-muted-foreground">
          단순히 웹사이트를 만드는 개발자가 아니라, 실제 현장의 문제를 이해하고
          기술로 해결하는 개발자가 되고자 합니다.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground">
            프로젝트 보기
          </button>

          <button className="px-6 py-3 rounded-xl border">연락하기</button>
        </div>
      </div>
    </section>
  );
}
