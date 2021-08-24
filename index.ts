const test = () => {
  alert("butt butt button");
};

type State =
  | "north_south_go"
  | "north_south_caution"
  | "east_west_go"
  | "east_west_caution";

type TrafficLight = {
  state: State;
  // no arguments on nextState because it will use 'this' to look at itself
  // this one understands when it's ns go, then it will change to ns caution
  nextState: () => void;
  // will target html element colors
  // this will change the color, and won't return anything because the job is done (this is called a side-effect)
  updateLights: () => void;
};

const trafficLight: TrafficLight = {
  state: "north_south_go",
  nextState: function () {
    if (this.state === "north_south_go") {
      this.state = "north_south_caution";
    } else if (this.state === "north_south_caution") {
      this.state = "east_west_go";
    } else if (this.state === "east_west_go") {
      this.state = "east_west_caution";
    } else if (this.state === "east_west_caution") {
      this.state = "north_south_go";
    }
    this.updateLights()
  },
  updateLights: function () {
    const north = document.querySelector(".north");
    const south = document.querySelector(".south");
    const east = document.querySelector(".east");
    const west = document.querySelector(".west");

    const car = document.querySelector('.car');
    const car2 = document.querySelector('.car2');

    if (this.state === "north_south_go") {
      north?.classList.remove("stop");
      south?.classList.remove("stop");
      north?.classList.add("go");
      south?.classList.add("go");
      east?.classList.remove("go", "caution");
      west?.classList.remove("go", "caution");
      east?.classList.add("stop");
      west?.classList.add("stop");
      car?.classList.remove('car-westbound');
      car?.classList.add('car-northbound');
      car2?.classList.remove('car-eastbound');
      car2?.classList.add('car-southbound');
    } else if (this.state === "east_west_go") {
      north?.classList.remove("go", "caution");
      south?.classList.remove("go", "caution");
      north?.classList.add("stop");
      south?.classList.add("stop");
      east?.classList.remove("stop");
      west?.classList.remove("stop");
      east?.classList.add("go");
      west?.classList.add("go");
      car?.classList.remove('car-northbound');
      car?.classList.add('car-westbound');
      car2?.classList.remove('car-southbound');
      car2?.classList.add('car-eastbound');
    } else if (this.state === "north_south_caution") {
      north?.classList.remove("go");
      south?.classList.remove("go");
      north?.classList.add("caution");
      south?.classList.add("caution");
      // car?.classList.remove('car-westbound');
      // car?.classList.add('car-northbound');
      // car2?.classList.remove('car-eastbound');
      // car2?.classList.add('car-southbound');
    } else if (this.state === "east_west_caution") {
      east?.classList.remove("go");
      west?.classList.remove("go");
      east?.classList.add("caution");
      west?.classList.add("caution");
      // car?.classList.remove('car-northbound');
      // car?.classList.add('car-westbound');
      // car2?.classList.remove('car-southbound');
      // car2?.classList.add('car-eastbound');
    }
  },
};
