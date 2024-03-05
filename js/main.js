"use strict";

/**
 * メインの処理
 */
const main = () => {
  // #image-inputでファイルが選択されたら
  document.getElementById("image-input").addEventListener("change", (e) => {
    // ファイル数が0ならreturn
    if (e.target.files.length === 0) return;
    // スライダーを入れる要素を取得
    const preview = document.getElementById("preview");
    // スライダーを入れる要素をリセット
    preview.innerHTML = "";
    // スライダーのテンプレートのタグを取得
    const template = document.getElementById("slider-template");
    // 複製
    const clone = template.content.cloneNode(true);
    // previewにスライダーを挿入
    preview.appendChild(clone);
    // スライダーの中のスライドを入れる部分を取得
    const slider = document.querySelector("#preview .carousel-inner");
    // ファイルをループを回して取り出してスライダーに挿入
    Object.values(e.target.files).forEach((file, index) => {
      // 画像オブジェクト作成
      const imageObj = new Image();
      // 画像読み込み
      imageObj.src = URL.createObjectURL(file);
      //   div作成
      const slide = document.createElement("div");
      //   クラス追加
      slide.classList.add(
        "carousel-item",
        "h-100",
        index === 0 && "active" // 最初の画像のみ「active」クラスをつける
      );
      imageObj.classList.add(
        "d-block",
        "img-thumbnail",
        "w-100",
        "h-100",
        "object-fit-contain"
      );
      //   スライドに画像マウント
      slide.appendChild(imageObj);
      //   スライダーにスライドマウント
      slider.appendChild(slide);
    });
  });
};

// ページが読み込まれたらmainの処理を実行する
window.addEventListener("load", main);
