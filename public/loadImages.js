async function loadImages() {
    const imageContainer = document.getElementById("imageContainer");

    try {
        const response = await fetch("http://localhost:3000/api/images"); // 取得後端 API 回傳的圖片列表
        const imageList = await response.json();

        imageList.forEach(imageName => {
            const img = document.createElement("img");
            img.src = `http://localhost:3000/images/${imageName}`;  // <-- 這裡要對應伺服器開放的 `/images/`
            img.alt = imageName;
            img.style.width = "150px";
            img.style.height = "150px";
            img.style.objectFit = "cover";
            imageContainer.appendChild(img);
        });
    } catch (error) {
        console.error("無法獲取圖片：", error);
    }
}
loadImages();

