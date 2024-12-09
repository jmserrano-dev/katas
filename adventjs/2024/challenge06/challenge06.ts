function inBox(box: string[]): boolean {
  for(let positionX = 0; positionX < box.length; positionX++) {
    const positionY = box[positionX].indexOf("*")
    
    if(positionY < 0) continue
    
    return [
      box[positionX - 1]?.[positionY],
      box[positionX + 1]?.[positionY],
      box[positionX]?.[positionY - 1],
      box[positionX]?.[positionY + 1]
    ].every(x => ["#", " "].includes(x))
  }
  
  return false
}

inBox(["###", "#*#", "###"]); // ➞ true

inBox(["####", "#* #", "#  #", "####"]); // ➞ true

inBox(["#####", "#   #", "#  #*", "#####"]); // ➞ false

inBox(["#####", "#   #", "#   #", "#   #", "#####"]); // ➞ false
