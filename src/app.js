
/*import statements*/
var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');


/*The main screen*/
var main_display = new UI.Card({
  title: 'Shade by Shakespeare',
  banner:'images/Shakespeare_portrait.png'
});

main_display.show();
main_display.on('click', 'select', function(){
    var options =[
      {
        title: "From the Bard",
        subtitle: "Shade from plays"
      },
      {
        title: "Random Shade",
        subtitle: "WhatWouldBardSay"
      }
    ];

    var menu = new UI.Menu({
        sections:[{
        title: 'Shade by Shakespeare',
        items: options
      }]
    });
  
  menu.show();
  
  menu.on('select', function(e) {
  if(e.itemIndex===0){
    var generator = new UI.Window();
    var insult = new UI.Text({
        position: new Vector2(0, 0),
        size: new Vector2(144, 168),
        text:'Shake your Pebble to get shade from one of Shakespeare\'s plays!',
        font:'GOTHIC_18',
        color:'black',
        textOverflow:'wrap',
        textAlign:'center',
        backgroundColor:'white'
    });
    var source = new UI.Text({
        position: new Vector2(0, 73),
        size: new Vector2(144, 168),
        text:'',
        font:'GOTHIC_14',
        color:'black',
        textOverflow:'wrap',
        textAlign:'left',
        backgroundColor:'white'
    });
    var theBard = new UI.Image({
        position: new Vector2(84,84),
        size: new Vector2(64,75),
        image:'images/Shakespeare.png'
    });

    generator.add(insult);
    generator.add(source);
    generator.add(theBard);
    var Accel = require('ui/accel');
    Accel.init();
    generator.on('accelTap',function(e){
        ajax(
          {
            url: 'https://api.myjson.com/bins/458mk',
            type: 'json'
          },
        function(data){
            var i = Math.floor(Math.random() * data.insults.length);
            insult.text('"'+data.insults[i].insult+'"');
            source.text(data.insults[i].source);
          },
        function(error){
            generator.title('Ajax request failed: '+error);
          }
        );
    
    });
    
    generator.show();
  
  
  
  } else {
    var generator2 = new UI.Window({
        backgroundColor: 'white'
});


    var theBard2 = new UI.Image({
        position: new Vector2(45,20),
        size: new Vector2(64,75),
        image:'images/Shakespeare_portrait.png'
    });
    var genInsult = new UI.Text({
        position: new Vector2(0, 90),
        size: new Vector2(144, 168),
        text:'Shake your Pebble to get randomly generated Shakespearean shade!',
        font:'GOTHIC_18',
        color:'black',
        textOverflow:'wrap',
        textAlign:'center',
        backgroundColor:'white'
    });

    generator2.add(theBard2);
    generator2.add(genInsult);

    var Accel1 = require('ui/accel');
    Accel1.init();
    generator2.on('accelTap',function(e){
    var part1=["\u00A0", " art a"];
    var part2=["artless", "bawdy","beslubbering", "bootless", "churlish", "cockered", "clouted", "craven", "currish", "dankish", "dissembling", "droning", "errant", "fawning", "fobbing", "froward", "frothy", "gleeking", "goatish", "gorbellied", "impertinent", "infectious", "jarring", "loggerheaded", "lumpish", "mammering", "mangled", "mewling", "paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish", "ruttish", "saucy", "spleeny", "spongy", "surly", "tottering", "unmuzzled", "vain", "venomed", "villainous", "warped", "wayward", "weedy", "yeasty"];
    var part3=["base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained", "clapper-clawed", "clay-brained", "common-kissing", "crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted", "dread-bolted", "earth-vexing", "elf-skinned", "fat-kidneyed", "fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born", "full-gorged", "guts-griping", "half-faced", "hasty-witted", "hedge-born", "hell-hated", "idle-headed", "ill-breeding", "ill-nurtured", "knotty-pated", "milk-livered", "motly-minded", "onion-eyed", "plume-plucked", "pottle-deep", "pox-marked", "reeling-ripe", "rough-hewn", "rude-growing", "rump-fed", "shard-borne", "sheep-biting", "spur-galled", "swag-bellied", "tardy-gaited", "tickle-brained", "toad-spotted", "unchin-snouted", "weather-bitten"];
    var part4=["apple-john", "baggage", "barnacle", "bladder", "boar-pig", "bugbear", "bum-bailey", "canker-blos", "clack-dish", "clotpole", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon", "flax-wench", "flirt-grill", "foot-licker", "fustilarian", "giglet", "gudgeon", "haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger", "joithead", "lewdster", "lout", "maggot-pie", "malt-worm", "mammet", "measle", "minnow", "miscreant", "moldwarp", "mumble-news", "nut-hook", "pigeon-egg", "pignut", "puttock", "pumpion", "ratsbane", "scut", "skainsmate", "strumpet", "varlot", "vassal", "whey-face", "wagtail"];
    var i = Math.floor(Math.random() * part1.length);
    var j = Math.floor(Math.random() * part2.length);
    var k = Math.floor(Math.random() * part3.length);
    var l = Math.floor(Math.random() * part4.length);
    genInsult.text("Thou" + part1[i] + " " + part2[j] + ", " + part3[k]+ " " + part4[l]+"!");  
    });
    generator2.show();
    }
  });
});