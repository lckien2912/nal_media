const latestPosts = [
  {
    id: 4,
    title: "新型コロナウイルス時代におけるベトナム企業の連携",
    content:
      "Covid-19の経済全体への影響に直面し、最大手民間企業500社は売上を増加させる方法を相互に模索した。",
    date: "November 18, 2020",
    author: "admin",
    category_name: "ベトナム情報",
    image: 4,
  },
  {
    id: 5,
    title: "Java言語のメリットとデメリット",
    content:
      "Javaがもたらすメリットにより、学習して使用する人々の数は日々増加しています。 ただし、言語がどれほど強力であっても、特定の制限があり、Javaも例外ではありません。",
    date: "November 17, 2020",
    author: "admin",
    category_name: "オフショア開発",
    image: 5,
  },
  {
    id: 6,
    title: "Dockerfileについて",
    content:
      "Linux、特にDockerにアプローチしている場合は、この記事が役に立つと思います。 この記事では、NALのSE Nguyen NgocDucがDockfileの概要を説明します。",
    date: "November 16, 2020",
    author: "admin",
    category_name: "NALブログ",
    image: 6,
  },
  {
    id: 7,
    title: "ベトナムのビジネス規制改革",
    content:
      "ベトナム政府は2020年から2025年までの事業活動に関する規定の廃止や簡素化の計画を規定した政府決議68号（68/NQ-CP）を公布した。",
    date: "November 13, 2020",
    author: "admin",
    category_name: "ベトナム情報",
    image: 7,
  },
  {
    id: 8,
    title: "ベトナム・日本ICTウィーク2020",
    content:
      "Japan ICTウィークは、今年で14年目を迎え、コロナウイルスの影響のため、オンラインの形式で11/9から11/13までの1週間、「ニューノーマル時代の日越ICT協力」というテーマで行われる。",
    date: "November 11, 2020",
    author: "admin",
    category_name: "NALブログ",
    image: 8,
  },
  {
    id: 9,
    title: "スクラムにおけるスクラムマスターの役割",
    content:
      "スクラムマスターは、チームのパフォーマンスを向上させるためにスクラムモデルで重要な役割を果たす人物です。 スクラムマスターの役割については、次の記事で詳細を説明します。",
    date: "November 10, 2020",
    author: "admin",
    category_name: "オフショア開発",
    image: 9,
  },
  {
    id: 10,
    title: "2020年度　10月までの企業活動統計データー",
    content: "10月と2020年の最初の10ヶ月の企業活動",
    date: "November 9, 2020",
    author: "admin",
    category_name: "ベトナム情報",
    image: 10,
  },
  {
    id: 11,
    title: "ベトナムシステム開発会社NALのエンジニア1日の業務",
    content:
      "今回は日本の案件をメインとしたベトナムシステム開発会社のNALを事例にして、エンジニアの1日の業務を紹介させていただきます。",
    date: "November 6, 2020",
    author: "admin",
    category_name: "NALブログ",
    image: 11,
  },
  {
    id: 12,
    title: "日本顧客はベトナムオフショア会社に要求するもの",
    content:
      "　ベトナムオフショア会社と日本顧客との協力を強化するためには、製品に関連する要求事項を満たすのにベトナムエンジニアは専門知識を継続的に向上すると共に日本の仕事文化に精通する必要がある。",
    date: "November 5, 2020",
    author: "admin",
    category_name: "オフショア開発",
    image: 12,
  },
  {
    id: 13,
    title: "NALが3年連続でベトナムIT会社トップに",
    content:
      "ベトナムソフトウェアと情報技術サービス協会により、NALが「A-IoT」分野で【2020年ベトナム企業トップ10社】の一社として正式に選出された。NALは今年でベトナムIT会社トップランキングに3年連続でランクインした。",
    date: "November 4, 2020",
    author: "admin",
    category_name: "NALブログ",
    image: 13,
  },
];

const popularPosts = [
  {
    id: 14,
    title: "ベトナム オフショア開発に関する問題解答",
    category_name: "オフショア開発",
    image: 14,
  },
  {
    id: 15,
    title: "2020年 情報技術産業の動向",
    category_name: "オフショア開発",
    image: 15,
  },
  {
    id: 16,
    title: "ベトナム オフショア 会社を選ぶ７つの基準",
    category_name: "オフショア開発",
    image: 16,
  },
  {
    id: 17,
    title: "ベトナム観光への情報技術適用",
    category_name: "ベトナム情報",
    image: 17,
  },
  {
    id: 18,
    title: "ベトナム オフショア 会社への選抜 メリットおよびデメリット",
    category_name: "オフショア開発",
    image: 18,
  },
];

const tagsList = [
  {
    tagName: "ベトナム システム開発",
    quantity: 19,
  },
  { tagName: "ベトナム　オフショア ", quantity: 17 },
  { tagName: "ベトナムIT会社 ", quantity: 17 },
  { tagName: "ベトナムシステム開発 ", quantity: 15 },
  { tagName: "ベトナムオフショア ", quantity: 12 },
];

const banners = [
  { image: "banner-1" },
  { image: "banner-2" },
  { image: "banner-3" },
];

const footerInfo = {
  // logo: "logo-NAL",
  title: "NAL MEDIA ベトナムオフショア開発にまつわる情報を提供します",
  content:
    "このサイトは、ベトナムにおけるオフショア開発の状況、ベトナムと日本の協力関係、およびテクノロジーに関する最新のニュースを更新し、NALの人々とお客様のストーリーを投稿しております。",
  address: "住所：3F, 84 Duy Tân, Cầu Giấy, Hà Nội, Việt Nam",
  phone: "電話番号：(+84)243-787-8654",
  email: "メールアドレス：info@nal.vn",
};

function renderLastestPosts(obj) {
  const html = [];
  obj.forEach((post) => {
    const tagType =
      post.category_name === "オフショア開発"
        ? "black"
        : post.category_name === "NALブログ"
        ? "beige"
        : "neon-green";
    const item = `<li class="post__item">
                      <a href="##" class="item__link row sm-gutters">
                        <div class="item__img col pc-4 tb-4 mb-12">
                          <img src="./assets/img/${post.id}.jpg" alt="" />
                        </div>
                        <section class="post__content col pc-8 tb-8 mb-12">
                          <span class="post__tag ${tagType}">${post.category_name}</span>
                          <div class="content__info">
                            <h1 class="post__heading title">
                              ${post.title}
                            </h1>
                            <span class="author">${post.date} by ${post.author}</span>
                          </div>
                          <p class="post__paragraph">
                            ${post.content}
                          </p>
                        </section>
                      </a>
                    </li>`;
    html.push(item);
  });
  document.querySelector("ul.post__list").innerHTML = html.join("");
}

function renderPopuPosts(obj) {
  const html = [];
  obj.forEach((post) => {
    const tagType =
      post.category_name === "オフショア開発"
        ? "black"
        : post.category_name === "NALブログ"
        ? "beige"
        : "neon-green";
    const item = `<li class="post__item">
                      <a href="##" class="sub-item__link">
                        <div class="sub-item__img">
                          <img src="./assets/img/${post.id}.jpg" alt="" />
                        </div>
                        <section class="sub-post__content">
                          <span class="post__tag ${tagType}">${post.category_name}</span>
                          <div class="content__info">
                            <h1 class="sub-post__heading title">
                              ${post.title}
                            </h1>
                          </div>
                        </section>
                      </a>
                    </li>`;
    html.push(item);
  });
  document.querySelector("ul.sub-post__list").innerHTML = html.join("");
}

function renderTags(obj) {
  html = [];
  obj.forEach((tag) => {
    const item = `<a href="#" class="tag__link">
                      <i class="fa-solid fa-tags"></i>
                      ${tag.tagName} (<strong>${tag.quantity}</strong> Posts)
                    </a>`;
    html.push(item);
  });
  document.querySelector("nav.tag__section").innerHTML = html.join("");
}

function renderBanners(obj) {
  html = [];
  obj.forEach((banner) => {
    const item = `<a href="##" class="banner__link">
                    <img
                      src="./assets/img/${banner.image}.jpg"
                      alt=""
                      class="banner"
                    />
                  </a>`;
    html.push(item);
  });
  document.querySelector("div.banner__section").innerHTML = html.join("");
}

function renderFooter(obj) {
  html = [];
  for (const value of Object.values(obj)) {
    const item = `<p>${value}</p>`;
    html.push(item);
  }
  document.querySelector("div.footer__info").innerHTML = html.join("");
}

renderLastestPosts(latestPosts);
renderPopuPosts(popularPosts);
renderTags(tagsList);
renderBanners(banners);
renderFooter(footerInfo);
