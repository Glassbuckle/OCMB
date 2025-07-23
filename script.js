const ocData = [
    {
        name: "card-1",
        image: "1.jpg",
        width: "180px",
        height: "400px",
        marginTop: "0px"
    },
    {
        name: "card-2",
        image: "2.jpg",
        width: "180px",
        height: "400px",
        marginTop: "120px"
    },
    {
        name: "card-3",
        image: "3.jpg",
        width: "180px",
        height: "400px",
        marginTop: "-60px"
    },
    {
        name: "card-4",
        image: "4.jpg",
        width: "180px",
        height: "400px",
        marginTop: "50px"
    }
];

const cardList = document.getElementById("card-list");

ocData.forEach((oc, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.style.setProperty("--w", oc.width);
    card.style.setProperty("--h", oc.height);
    // 关键：设置上下错落 和 左右遮挡
    card.style.marginTop = oc.marginTop || (index % 2 === 0 ? "0px" : "80px");
    card.style.marginLeft = index === 0 ? "0px" : "-20px";
    const imageSrc = `${index + 1}.jpg`;
    card.innerHTML = `
    <img src="${oc.image}" alt="${oc.name}" />
    <p>${oc.name}</p>
  `;

    cardList.appendChild(card);
});
