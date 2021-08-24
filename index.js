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
        var car = document.querySelector('.car');
        var car2 = document.querySelector('.car2');
        if (this.state === "north_south_go") {
            north === null || north === void 0 ? void 0 : north.classList.remove("stop");
            south === null || south === void 0 ? void 0 : south.classList.remove("stop");
            north === null || north === void 0 ? void 0 : north.classList.add("go");
            south === null || south === void 0 ? void 0 : south.classList.add("go");
            east === null || east === void 0 ? void 0 : east.classList.remove("go", "caution");
            west === null || west === void 0 ? void 0 : west.classList.remove("go", "caution");
            east === null || east === void 0 ? void 0 : east.classList.add("stop");
            west === null || west === void 0 ? void 0 : west.classList.add("stop");
            car === null || car === void 0 ? void 0 : car.classList.remove('car-westbound');
            car === null || car === void 0 ? void 0 : car.classList.add('car-northbound');
            car2 === null || car2 === void 0 ? void 0 : car2.classList.remove('car-eastbound');
            car2 === null || car2 === void 0 ? void 0 : car2.classList.add('car-southbound');
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
            car === null || car === void 0 ? void 0 : car.classList.remove('car-northbound');
            car === null || car === void 0 ? void 0 : car.classList.add('car-westbound');
            car2 === null || car2 === void 0 ? void 0 : car2.classList.remove('car-southbound');
            car2 === null || car2 === void 0 ? void 0 : car2.classList.add('car-eastbound');
        }
        else if (this.state === "north_south_caution") {
            north === null || north === void 0 ? void 0 : north.classList.remove("go");
            south === null || south === void 0 ? void 0 : south.classList.remove("go");
            north === null || north === void 0 ? void 0 : north.classList.add("caution");
            south === null || south === void 0 ? void 0 : south.classList.add("caution");
            // car?.classList.remove('car-westbound');
            // car?.classList.add('car-northbound');
            // car2?.classList.remove('car-eastbound');
            // car2?.classList.add('car-southbound');
        }
        else if (this.state === "east_west_caution") {
            east === null || east === void 0 ? void 0 : east.classList.remove("go");
            west === null || west === void 0 ? void 0 : west.classList.remove("go");
            east === null || east === void 0 ? void 0 : east.classList.add("caution");
            west === null || west === void 0 ? void 0 : west.classList.add("caution");
            // car?.classList.remove('car-northbound');
            // car?.classList.add('car-westbound');
            // car2?.classList.remove('car-southbound');
            // car2?.classList.add('car-eastbound');
        }
    }
};
