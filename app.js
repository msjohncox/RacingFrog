var app = angular.module('racingFrogs', []);
app.controller('MainController', MainController);
//No need to change anything above this line.

function MainController($timeout) {
var vm = this; //instead of using this when refering to the controller, let's use vm. It will make things easier. "this" refers to the current invocation of the function
        vm.working = "Yes";
        vm.frog = [];
        vm.frog1 = new FrogMaker(0, "InABlender", 1, "picUrl", "green");
        vm.frog2 = new FrogMaker(0, "GreenTerror", 1, "picUrl", "green");
        vm.frog3 = new FrogMaker(0, "Camo", 1, "picUrl", "green");
        vm.frog4 = new FrogMaker(0, "Kermit", 1, "picUrl", "green");
                                  
    function FrogMaker(lane, name, position, picUrl, color) {
            this.lane = 0;
            this.name = name;
            this.posX = 1;
            this.picUrl = "hopping-frog-s.png";
            this.color = "green";
            vm.frog.push(this);
         };
      
    vm.race = function() {
        vm.winner = "Let the race begin! ";
        var winning = 0;
        var raceTrackWidth = document.getElementById('raceTrack').offsetWidth;//setting the width of the race track
        var itsDone = false;//value for when to end the race
        if (!itsDone) {
            for (var i = 0; i < vm.frog.length; i++) {
                var posX = vm.frog[i].position + Math.floor(Math.random() * 20);//assigning a random value to posX, which is the location of the frog
                vm.frog[i].position = posX;
                document.getElementById('frog' + (i + 1)).style.left = posX + "px";//comparing the position of the frog to the end of the track
                if (winning < posX) { 
                    winning = posX; 
                };
                if (winning >= raceTrackWidth) {
                    vm.winner = " The winner is " + vm.frog[i].name +  " in lane " + vm.frog[i].lane + "   ";
                    itsDone = true;
                    break;
                }
            }
        }
        if (!itsDone) {
            $timeout(vm.race, 70);
        }
    }
 /*
    vm.removeFrog = function () {
        var a = vm.frogs.length - 1;
        if (a < 2) { a = 2 };
        vm.frogs = [];
        for (var i = 0; i < a; i++) {
            vm.frogs.push(vm.frogSet[i]);
            console.log("removing frogs " + i);
        }
      //  vm.newRace();
   // }

    vm.getTrackWidth = function () {
        var raceTrackWidth = document.getElementById('raceTrack').offsetWidth;
        //console.log("Track width is : " + raceTrackWidth);
        return raceTrackWidth;
    };

    vm.newRace = function () {
        vm.winner = "";
        for (var i = 0; i < vm.frogs.length; i++) {
            vm.frogs[i].position = 0;
            document.getElementById('frog' + (i + 1)).style.left = vm.frogs[i].position + "px";
            vm.winner = "You have " + vm.frogs.length + "  frogs ready to RACE ! ";
        }
    }

    
    
    //////////////

    

    /*vm.checkWinners = function() {//determine when the first frog reaches finish line
        var potentialWinners = [];        
        race.forEach(function(frogs) {
            if (frogs.posX >= finishLine) {
                vm.potentialWinners.push(frogs);
            }
        })
        if(potentialWinners.length > 0) {
            var firstToCross = 0;
            var firstPlace;
            potentialWinnersforEach(function (frogs) {
                if(frogs.posX > firstToCross) {
                    firstToCross = frogs.posX;
                    firstPlace = frogs;
                } else if(frogs.posX === firstToCross){
                    vm.winners.push(frog);
                }
            })
            vm.winners.unShift(firstPlace);
        
        if(vm.winners.length > 0) {
            vm.racing = false;
        }
        }
    };*/

    //fun with Joe and Bob below
    vm.joe = new Guy("Joe", 100)//the two properties of the controller
    vm.bob = new Guy("Bob", 150)//..to keep track of the two objects; they each have different amounts of money in their pockets
    vm.bank = 200;
    
    function Guy(name, startingCash){
    this.name = name;
    this.cash = startingCash;
    this.giveCash = function(amount) {//to reduce the guy's cash. "amount" is to tell the guy how much cash to give you
        if (amount <= this.cash && amount > 0) {//to increase the guy's cash. if statement check if he has enough cash and if so, he gives the cash and returns it as the returned value
            this.cash = this.cash - amount;
            return amount;
        } else {//if the guy doesn't have enough cash, he tells you and returns zero dollars
            alert("I don't have enough cash to give you " + amount + this.name + " says...");
            return 0;
    }
};
    this.receiveCash = function(amount) {
        if (amount > 0) {
            this.cash = this.cash + amount;
            return amount;
        } else {
            alert(amount + " isn't an amount I'll take " + this.name + " says...");
            return 0;
            }
        }
    }

vm.giveMoneyToJoe = function() {
    if(vm.bank >= 10) {
        vm.bank -= vm.joe.receiveCash(10)
    } else {
        alert("The bank is out of money, sorry.");
    }
}

vm.receiveMoneyFromBob = function() {
    vm.bank += vm.bob.giveCash(5);
   }
};

// Betting Service is separate from Main Controller ================================= 
/*app.service('BettingService', BettingService);
function BettingService() {
    
    function BettingService() {
        var _races = {};
        var _raceId = 0;
        this.registerRace = function () {

        }
        this.getRace = function (reaceId) {

        }
        var Race = function () {
            this.id = _raceId;
            this.tickets = 1300;
            this.contestants = [];
            this.open = true;
            this.bets = {};
            _races[this.id] = this;
            _raceId++;
        }
    }

} */ // end of Betting Service =====================================================

//var roster = {
//    players: {},
//    addPlayer: function (player) {
//        if (player.name) {
//            this.players[player.id] = player;
//            reloadPlayerCards();
//        } else {
//            alert("Unable to Add Player... likely missing a field or invalid data format.");
//        }
//    }
//}

//var fullNFL = {
//    players2: {},
//    addPlayer2: function (player2) {
//        this.players2[player2.id] = player2;
//    }
//}

//// roster factory
//var Player = function (name, position, number, photo, team, status, byeweek, age, id) {
//    this.name = name;
//    this.position = position;
//    this.number = number;
//    this.photo = photo;
//    this.team = team;
//    this.status = status;
//    this.byeweek = byeweek;
//    this.age = age;
//    this.id = id;
//}