let camp = "bootcamp"
console.info(camp);

// concat : +
camp = "bootcamp " + "nodejs";
console.info(camp);

// tab space : \t
camp = "bootcamp " + "nodejs" + "\t\tfullstack";
console.info(camp);

// newlinespace : \n
camp = "bootcamp " + "nodejs" + "\nfullstack\nwith code";

// literal string : `` with ${nama}
let nama = "codeid";
camp = `bootcamp with ${nama}`
console.info(camp);

// replace : <variable>.replace()
camp = "bootcamp codeid fullstack";
let boot = camp.replace("codeid", "codeid academy");
camp.replace("codeid", "hello");
console.info(camp);
console.info(boot);

// split : <variable>.split()
let campSplit = "aku-suka-ecma";
campSplit = campSplit.split("-", 2)
console.info(campSplit);

// join : <variableArray>.join()
let campJoin = campSplit.join("**")
console.log(campJoin);

// trim : <variable>.trim()
let campTrim = "    aku suka programmer     ";
campTrim = campTrim.trim();
console.log(campTrim);

// regular expression
let story = `saya mengikuti kegiatan bootcamp nodejs fullstack bersama codeXaccademy,
di nodejs fullstack kita belajar postgre dan javascript,
nodejs adalah framework dari javascript.`;
console.info(story);
let searchReplace = /nodejs/g;
console.info(story.replace(searchReplace, "framework js"));