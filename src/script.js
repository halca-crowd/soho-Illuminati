function allBoothHidden() {
    let booths = document.querySelectorAll(".booth");
    booths.forEach(booth => {
        booth.classList.add("d-none");
    });
}

function allBoothVisible() {
    let booths = document.querySelectorAll(".booth");
    booths.forEach(booth => {
        booth.classList.remove("d-none");
    });
}

function boothVisible(qs) {
    let boothsInArea = document.querySelectorAll(qs);
    boothsInArea.forEach(booth => {
        booth.classList.toggle("d-none");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const selectElm = document.getElementById("area-selection");
    selectElm.addEventListener("change", (e) => {
        console.log(e.target.value);
        if (e.target.value === "" || e.target.value === "all") {
            allBoothHidden();
            allBoothVisible();
        } else {
            allBoothHidden();
            boothVisible(`.area-${e.target.value}`);
        }
        
        /*
        switch (e.target.value) {
            case "1":
                AllBoothHidden();
                boothVisible(".area-1");
                break;
            case "2":
                AllBoothHidden();
                boothVisible(".area-2");
                break;
            case "5":
                AllBoothHidden();
                boothVisible(".area-5");
                break;
            case "9":
                AllBoothHidden();
                boothVisible(".area-9");
                break;
            case "other":
                AllBoothHidden();
                boothVisible(".area-other");
                break;
        }
        */
    });

});
