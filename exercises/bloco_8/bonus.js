//Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//Crie uma função que retorna o dano do dragão.
//O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDamage = () => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  const damage = Math.floor((Math.random() * (maxDamage - minDamage) + minDamage));
  return damage;
};

//Crie uma função que retorna o dano causado pelo warrior.
//O dano será um número aleatório entre o valor do atributo strength(dano mínimo) e o valor de strength * weaponDmg(dano máximo).

const warriorDamage = () => {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const damage = Math.floor((Math.random() * (maxDamage - minDamage) + minDamage));
  return damage;
};


const infoMage = () => {
  const mageDamage = Math.floor((Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence));
  if (mage.mana < 15) {
    return ({
      dano: 'Não possui mana suficiente',
      mana: 0,
    });
  }
  return ({
    dano: mageDamage,
    mana: 15,
  });
};


//Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack();
    dragon.healthPoints = dragon.healthPoints - warriorDamage;
    warrior.damage = warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const infoMage = mageAttack();
    const mageDamage = infoMage.dano;
    const mageMage = infoMage.mana;
    dragon.healthPoints = dragon.healthPoints - mageDamage;
    mage.damage = mageDamage;
    mage.mana = mage.mana - mageMage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack();
    mage.healthPoints = mage.healthPoints - dragonDamage;
    warrior.healthPoints = warrior.healthPoints - dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => {
    return battleMembers;
  },
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(infoMage);
gameActions.dragonTurn(dragonDamage);

console.log(gameActions.turnResults());


