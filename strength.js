const strengths = [
  [
    "納品速度",
    "お問い合わせからは営業日1日以内に返信、ヒアリングの際には豊富な経験を持つエンジニアが最短最安でお客様の問題を解決する方法を提案致します。",
  ],
  [
    "多国籍チーム",
    "弊チームには英語ネイティブ、ロシア語ネイティブ、バイリンガルの日本人が在籍しております。日本語以外の言語対応や、日本人以外のクライアント様にも対応が可能です。",
  ],
  [
    "安価",
    "ヒアリングの際、WordPressなどのCMSを用いた開発など最も安価で制作できる方法をご提案させて頂きます。",
  ],
  [
    "開発力",
    "開発チームにはWebアプリ開発からスマホアプリ開発、データ分析などシステム開発に関わる様々な業務に携わった経験のあるスタッフが在籍しております。",
  ],
];

const stringthElements = strengths.map((arry) => {
  return `<div class="col span-1-of-4 box">
  <i class="ion-ios-clock-outline icon-why"></i>
  <h3>${arry[0]}</h3>
  <p class="icon-why-paragraph">${arry[1]}</p>
</div>`;
});
document.querySelector(".js--wp-1").innerHTML = stringthElements.join("");
