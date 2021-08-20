var test = function () {
    alert("butt butt button");
};
var trafficLight = {
    state: "north_south_go",
    nextState: function () {
        if (this.state === "north_south_go") {
            this.state = "north_south_caution";
        }
        else if (this.state === "north_south_caution") {
            this.state = "east_west_go";
        }
        else if (this.state === "east_west_go") {
            this.state = "east_west_caution";
        }
        else if (this.state === "east_west_caution") {
            this.state = "north_south_go";
        }
        this.updateLights();
    },
    updateLights: function () {
        var north = document.querySelector(".north");
        var south = document.querySelector(".south");
        var east = document.querySelector(".east");
        var west = document.querySelector(".west");
        if (this.state === "north_south_go") {
            north === null || north === void 0 ? void 0 : north.classList.remove("stop");
            south === null || south === void 0 ? void 0 : south.classList.remove("stop");
            north === null || north === void 0 ? void 0 : north.classList.add("go");
            south === null || south === void 0 ? void 0 : south.classList.add("go");
            east === null || east === void 0 ? void 0 : east.classList.remove("go", "caution");
            west === null || west === void 0 ? void 0 : west.classList.remove("go", "caution");
            east === null || east === void 0 ? void 0 : east.classList.add("stop");
            west === null || west === void 0 ? void 0 : west.classList.add("stop");
        }
        else if (this.state === "east_west_go") {
            north === null || north === void 0 ? void 0 : north.classList.remove("go", "caution");
            south === null || south === void 0 ? void 0 : south.classList.remove("go", "caution");
            north === null || north === void 0 ? void 0 : north.classList.add("stop");
            south === null || south === void 0 ? void 0 : south.classList.add("stop");
            east === null || east === void 0 ? void 0 : east.classList.remove("stop");
            west === null || west === void 0 ? void 0 : west.classList.remove("stop");
            east === null || east === void 0 ? void 0 : east.classList.add("go");
            west === null || west === void 0 ? void 0 : west.classList.add("go");
        }
        else if (this.state === "north_south_caution") {
            north === null || north === void 0 ? void 0 : north.classList.remove("go");
            south === null || south === void 0 ? void 0 : south.classList.remove("go");
            north === null || north === void 0 ? void 0 : north.classList.add("caution");
            south === null || south === void 0 ? void 0 : south.classList.add("caution");
        }
        else if (this.state === "east_west_caution") {
            east === null || east === void 0 ? void 0 : east.classList.remove("go");
            west === null || west === void 0 ? void 0 : west.classList.remove("go");
            east === null || east === void 0 ? void 0 : east.classList.add("caution");
            west === null || west === void 0 ? void 0 : west.classList.add("caution");
        }
    }
};
