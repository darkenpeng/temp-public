const static = {
    loopCount : 5,
    distance: 2,
    restLimit: 3
}

async function wait(delay){
  return new Promise(resolve => setTimeout(resolve, delay));
}

const range = (length) => Array.from({length}, (_, i) => i)

async function main() {
  console.log('A race between 🐰 and 🐢 has started'); 
  for (const i of range(static["loopCount"])) {
    const nthDistance = (i+1)*static["distance"];
    await wait(static["restLimit"]*1000)
    console.log(`${static["distance"]}m moved (current position of 🐢 : ${nthDistance}m)`)
    await wait(1000)
    console.log(`rest for ${static["restLimit"]} seconds 💦`)
  }
  console.log("🐢 finally arrived. (🐢 beats 🐰)")
}

main()