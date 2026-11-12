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
          만나고 다양한 인테리어 업자들과 협업하면서 한 가지 문제를
          발견했습니다. 고객은 믿을 수 있는 시공업자를 찾기 어려웠고, 실력과
          경험을 갖춘 업자들은 자신을 알릴 수 있는 공간이 부족했습니다.
        </p>

        <p className="text-lg leading-9 text-muted-foreground">
          이러한 문제를 직접 해결해보고 싶다는 생각이 제가 프로그래밍을 시작하게
          된 가장 큰 계기였습니다. 저는 현장에서 쌓아온 경험과 개발 기술을
          결합하여 고객과 시공업자를 더 쉽고 자연스럽게 연결하고, 서로의 신뢰를
          바탕으로 함께 성장할 수 있는 건강한 생태계를 만들어가고자 합니다.
        </p>

        <p className="text-lg leading-9 text-muted-foreground">
          또한 저는 배움에는 끝이 없다고 생각합니다. 세상은 끊임없이 변화하고
          기술은 하루가 다르게 발전합니다. 그렇기에 현재 알고 있는 것에 안주하지
          않고, 부족한 부분을 끊임없이 돌아보며 스스로를 연구하고 배워나가는
          자세를 잃지 않으려 합니다.
        </p>

        <p className="text-lg leading-9 text-muted-foreground">
          아직은 배워야 할 것도 많고 부족한 점도 많습니다. 하지만 부족함을
          부끄러워하기보다는 성장할 수 있는 기회로 받아들이고, 하나씩 배우고
          경험하며 저만의 역량을 쌓아가겠습니다.
        </p>

        <p className="text-lg leading-9 text-muted-foreground">
          단순히 웹사이트를 만드는 개발자가 아니라, 현장의 문제를 이해하고
          기술로 해결하며, 끊임없이 배우고 성장하는 개발자. 그것이 제가
          나아가고자 하는 방향입니다.
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
