GET http://localhost:3000/monsters

optional parameters:

_limit=[number] - limit the number of monsters returned
_page=[number] - offset your request for monsters to some page (must specify a limit)

example:

GET http://localhost:3000/monsters/?_limit=20&_page=3

sample response:
[
  {
    "name": "Chronos",
    "age": 4005.302453418598,
    "description": "Effulgence eldritch shunned foetid. Ululate gibbering tenebrous foetid iridescence daemoniac. Stench nameless gambrel. Amorphous furtive iridescence noisome. Foetid mortal nameless.",
    "id": 1
  },
  {
    "name": "Tartarus",
    "age": 1874.4913565609456,
    "description": "Cyclopean swarthy amorphous singular accursed furtive non-euclidean stygian. Swarthy gibbering charnel eldritch daemoniac gibbous. Cyclopean lurk hideous tentacles squamous immemorial tenebrous mortal. Madness tentacles furtive mortal foetid decadent. Foetid immemorial comprehension.",
    "id": 2
  },
  {
    "name": "Hemera",
    "age": 4094.8375978925988,
    "description": "Dank immemorial abnormal gambrel. Cat lurk unutterable. Abnormal tenebrous ululate. Nameless swarthy manuscript eldritch indescribable accursed antediluvian decadent.",
    "id": 3
  }
]

POST http://localhost:3000/monsters
headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
}

body:
{ name: string, age: number, description: string }

function createMonster(name, age, description) {
    const monsterData = {
      name: name,
      age: age,
      description: description
    };
  
    fetch('http://localhost:3000/monsters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(monsterData)
    })
    .then(response => response.json())
    .then(monster => console.log('Success:', monster))
    .catch(error => console.error('Error:', error));
  }
  