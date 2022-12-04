function wrapping(gifts: string[]) {
  return gifts.map((gift) => {
    const wrapper = "*".repeat(gift.length + 2);
    return [wrapper, `*${gift}*`, wrapper].join("\n");
  });
}

const gifts = ["book", "game", "socks"];
const wrapped = wrapping(gifts);
console.log(wrapped);
