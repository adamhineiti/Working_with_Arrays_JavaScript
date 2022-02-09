// characters list
var characters = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]

//note to self: do not use "list" (like in the lecture) since the word "characters" is being used!!
for (let character of characters) {
    //NO DINKY FIGHTERS!! Code excludes anyone below 10 health and 2 damage 
    if (character.health >= 10 && character.damage >= 2 && character.warrior) {
        //create div
        //reference lecture at around 53 minutes
        //reference website https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
        let ele = document.createElement('div');
        let nameEle = document.createElement('h1');
        let damageEle = document.createElement('h2');
        let healthEle = document.createElement('h3');
        //giving the elements their information
        //reference jones lecture minute 53
        nameEle.innerHTML = `Name: ${character.name}`;
        damageEle.innerHTML = `Damage: ${character.damage}`;
        healthEle.innerHTML = `Health: ${character.health}`;
        //make names with the letter a red
        //reference https://www.tutorialspoint.com/javascript-filter-an-array-of-strings-matching-case-insensitive-substring
        //reference https://www.codegrepper.com/code-examples/javascript/get+red+color+text+in+javascript
        //!= -1 keeps all the names from being red and instead targeting a specific name!!
        if (character.name.toLowerCase().indexOf('a') != -1) {
            nameEle.style.color = 'red';
        }
        //adding all divs under ele and putting them all into the body
        ele.append(nameEle, damageEle, healthEle ); document.body.appendChild(ele);
    }
}